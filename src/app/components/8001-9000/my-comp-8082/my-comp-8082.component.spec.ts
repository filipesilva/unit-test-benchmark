import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8082Component } from './my-comp-8082.component';

describe('MyComp8082Component', () => {
  let component: MyComp8082Component;
  let fixture: ComponentFixture<MyComp8082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
