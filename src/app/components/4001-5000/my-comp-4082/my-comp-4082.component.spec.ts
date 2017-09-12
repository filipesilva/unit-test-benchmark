import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4082Component } from './my-comp-4082.component';

describe('MyComp4082Component', () => {
  let component: MyComp4082Component;
  let fixture: ComponentFixture<MyComp4082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
