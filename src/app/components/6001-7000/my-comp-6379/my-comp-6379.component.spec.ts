import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6379Component } from './my-comp-6379.component';

describe('MyComp6379Component', () => {
  let component: MyComp6379Component;
  let fixture: ComponentFixture<MyComp6379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
