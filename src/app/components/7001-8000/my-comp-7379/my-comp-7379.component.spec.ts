import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7379Component } from './my-comp-7379.component';

describe('MyComp7379Component', () => {
  let component: MyComp7379Component;
  let fixture: ComponentFixture<MyComp7379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
