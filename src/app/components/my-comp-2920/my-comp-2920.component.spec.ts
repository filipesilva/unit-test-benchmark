import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2920Component } from './my-comp-2920.component';

describe('MyComp2920Component', () => {
  let component: MyComp2920Component;
  let fixture: ComponentFixture<MyComp2920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
