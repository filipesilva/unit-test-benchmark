import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2831Component } from './my-comp-2831.component';

describe('MyComp2831Component', () => {
  let component: MyComp2831Component;
  let fixture: ComponentFixture<MyComp2831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
