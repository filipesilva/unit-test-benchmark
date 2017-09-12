import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4379Component } from './my-comp-4379.component';

describe('MyComp4379Component', () => {
  let component: MyComp4379Component;
  let fixture: ComponentFixture<MyComp4379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
