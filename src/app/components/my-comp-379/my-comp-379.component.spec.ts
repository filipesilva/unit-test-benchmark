import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp379Component } from './my-comp-379.component';

describe('MyComp379Component', () => {
  let component: MyComp379Component;
  let fixture: ComponentFixture<MyComp379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
