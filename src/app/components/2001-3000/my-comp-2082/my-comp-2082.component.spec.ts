import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2082Component } from './my-comp-2082.component';

describe('MyComp2082Component', () => {
  let component: MyComp2082Component;
  let fixture: ComponentFixture<MyComp2082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
