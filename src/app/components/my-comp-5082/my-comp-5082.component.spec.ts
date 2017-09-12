import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5082Component } from './my-comp-5082.component';

describe('MyComp5082Component', () => {
  let component: MyComp5082Component;
  let fixture: ComponentFixture<MyComp5082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
