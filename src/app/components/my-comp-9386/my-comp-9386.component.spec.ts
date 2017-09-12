import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9386Component } from './my-comp-9386.component';

describe('MyComp9386Component', () => {
  let component: MyComp9386Component;
  let fixture: ComponentFixture<MyComp9386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
