import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2089Component } from './my-comp-2089.component';

describe('MyComp2089Component', () => {
  let component: MyComp2089Component;
  let fixture: ComponentFixture<MyComp2089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
