import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9082Component } from './my-comp-9082.component';

describe('MyComp9082Component', () => {
  let component: MyComp9082Component;
  let fixture: ComponentFixture<MyComp9082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
