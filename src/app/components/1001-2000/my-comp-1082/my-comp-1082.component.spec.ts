import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1082Component } from './my-comp-1082.component';

describe('MyComp1082Component', () => {
  let component: MyComp1082Component;
  let fixture: ComponentFixture<MyComp1082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
