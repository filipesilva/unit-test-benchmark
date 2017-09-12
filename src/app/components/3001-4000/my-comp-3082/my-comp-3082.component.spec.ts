import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3082Component } from './my-comp-3082.component';

describe('MyComp3082Component', () => {
  let component: MyComp3082Component;
  let fixture: ComponentFixture<MyComp3082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
