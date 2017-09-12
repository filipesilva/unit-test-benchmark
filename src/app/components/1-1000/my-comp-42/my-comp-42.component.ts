import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp-42',
  template: `
    <p>
      my-comp-42 Works!
    </p>
  `,
  styles: []
})
export class MyComp42Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
