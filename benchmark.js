// Helper funtions from Angular CLI e2e tests.
const child_process = require('child_process');
const fs = require('fs');
const treeKill = require('tree-kill');

let _processes = [];

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writeFile(fileName, content, options) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, content, options, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function execAndWaitForOutputToMatch(cmd, args, match, silent = false) {
  return _exec({ waitForMatch: match, silent }, cmd, args);
}

function waitForAnyProcessOutputToMatch(match, timeout = 30000) {
  // Race between _all_ processes, and the timeout. First one to resolve/reject wins.
  return Promise.race(_processes.map(childProcess => new Promise(resolve => {
    let stdout = '';
    let stderr = '';
    childProcess.stdout.on('data', (data) => {
      stdout += data.toString();
      if (data.toString().match(match)) {
        resolve({ stdout, stderr });
      }
    });
    childProcess.stderr.on('data', (data) => {
      stderr += data.toString();
    });
  })).concat([
    new Promise((resolve, reject) => {
      // Wait for 30 seconds and timeout.
      setTimeout(() => {
        reject(new Error(`Waiting for ${match} timed out (timeout: ${timeout}msec)...`));
      }, timeout);
    })
  ]));
}

function killAllProcesses(signal = 'SIGTERM') {
  _processes.forEach(process => treeKill(process.pid, signal));
  _processes = [];
}


function _exec(options, cmd, args) {
  let stdout = '';
  let stderr = '';
  const cwd = process.cwd();

  args = args.filter(x => x !== undefined);
  const flags = [
    options.silent && 'silent',
    options.waitForMatch && `matching(${options.waitForMatch})`
  ]
    .filter(x => !!x)  // Remove false and undefined.
    .join(', ')
    .replace(/^(.+)$/, ' [$1]');  // Proper formatting.

  if (!options.silent) {
    console.log(
      `==========================================================================================`
    );
    console.log(`Running \`${cmd} ${args.map(x => `"${x}"`).join(' ')}\`${flags}...`);
    console.log(`CWD: ${cwd}`);
  }

  const spawnOptions = { cwd };

  if (process.platform.startsWith('win')) {
    args.unshift('/c', cmd);
    cmd = 'cmd.exe';
    spawnOptions['stdio'] = 'pipe';
  }

  const childProcess = child_process.spawn(cmd, args, spawnOptions);
  childProcess.stdout.on('data', (data) => {
    stdout += data.toString('utf-8');
    if (options.silent) {
      return;
    }
    data.toString('utf-8')
      .split(/[\n\r]+/)
      .filter(line => line !== '')
      .forEach(line => console.log('  ' + line));
  });
  childProcess.stderr.on('data', (data) => {
    stderr += data.toString('utf-8');
    if (options.silent) {
      return;
    }
    data.toString('utf-8')
      .split(/[\n\r]+/)
      .filter(line => line !== '')
      .forEach(line => console.error('  ' + line));
  });

  _processes.push(childProcess);

  // Create the error here so the stack shows who called this function.
  const err = new Error(`Running "${cmd} ${args.join(' ')}" returned error code `);
  return new Promise((resolve, reject) => {
    childProcess.on('exit', (error) => {
      _processes = _processes.filter(p => p !== childProcess);

      if (!error) {
        resolve({ stdout, stderr });
      } else {
        err.message += `${error}...\n\nSTDOUT:\n${stdout}\n\nSTDERR:\n${stderr}\n`;
        reject(err);
      }
    });

    if (options.waitForMatch) {
      childProcess.stdout.on('data', (data) => {
        if (data.toString().match(options.waitForMatch)) {
          resolve({ stdout, stderr });
        }
      });
    }
  });
}


// Benchmark code.

function benchmarkScript(scriptName) {
  // Set silent to false to see karma output message (e.g. for debugging).
  const silent = true;
  // Karma is only really finished with a run when it shows a non-zero total time in the first slot.
  const karmaGoodRegEx = /Executed \d+ of \d+ SUCCESS \((\d+\.\d+) secs/;
  const specFile = 'src/app/components/1-1000/my-comp-1/my-comp-1.component.spec.ts';
  let originalSpec;

  const NS_PER_SEC = 1e9;
  // Time in seconds.
  const results = {
    initialTime: 0,
    initialSpecTime: 0,
    rebuilds: [
      // Rebuilds look like this.
      // {time: 0, specTime: 0}
    ]
  };

  let startTime = process.hrtime();

  return execAndWaitForOutputToMatch('npm', ['run', scriptName], karmaGoodRegEx, silent)
    // Record the time for the initial build.
    .then(({ stdout }) => {
      const diff = process.hrtime(startTime);
      const time = (diff[0] * NS_PER_SEC + diff[1]) / NS_PER_SEC;
      const specTime = parseFloat(stdout.match(karmaGoodRegEx)[1]);
      results.initialTime = time;
      results.initialSpecTime = specTime;
    })
    // Save original spec contents.
    .then(() => readFile(specFile))
    .then((data) => originalSpec = data)
    // Record the time for 5 rebuilds.
    .then(() => {
      let promise = Promise.resolve();
      for (let idx = 0; idx < 5; idx++) {
        promise = promise
          .then(() => startTime = process.hrtime())
          .then(() => writeFile(specFile, originalSpec + 'console.log(1);'))
          .then(() => waitForAnyProcessOutputToMatch(karmaGoodRegEx, 2000000))
          .then(({ stdout }) => {
            const diff = process.hrtime(startTime);
            const time = (diff[0] * NS_PER_SEC + diff[1]) / NS_PER_SEC;
            const specTime = parseFloat(stdout.match(karmaGoodRegEx)[1]);
            results.rebuilds.push({ time, specTime });
          });
      }
      return promise;
    })
    // Kill process and restore original spec.
    .then(() => killAllProcesses(), (err) => {
      killAllProcesses();
      throw err;
    })
    .then(() => writeFile(specFile, originalSpec))
    .then(() => results);
}

function printResults(title, results) {
  const avgPluck = (arr, prop) => arr.reduce((p, c) => p + c[prop], 0) / arr.length;
  const rebuildAvg = avgPluck(results.rebuilds, 'time');
  const rebuildSpecAvg = avgPluck(results.rebuilds, 'specTime');
  console.log(`Script: ${title}, build: ${results.initialTime} (${results.initialSpecTime}) secs, rebuilds: ${rebuildAvg} (${rebuildSpecAvg}) secs.`);
}

const scripts = [
  'benchmark-cli'
];

let promise = Promise.resolve();
scripts.forEach((script) => {
  promise = benchmarkScript(script)
    .then((results) => printResults(script, results));
});

return promise;
