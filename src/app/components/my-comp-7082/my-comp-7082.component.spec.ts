import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7082Component } from './my-comp-7082.component';

describe('MyComp7082Component', () => {
  let component: MyComp7082Component;
  let fixture: ComponentFixture<MyComp7082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
