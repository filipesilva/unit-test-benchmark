import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp-1',
  template: `
    <p>
      my-comp-1 Works!
    </p>
  `,
  styles: []
})
export class MyComp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
