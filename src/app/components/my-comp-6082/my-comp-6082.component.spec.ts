import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6082Component } from './my-comp-6082.component';

describe('MyComp6082Component', () => {
  let component: MyComp6082Component;
  let fixture: ComponentFixture<MyComp6082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
