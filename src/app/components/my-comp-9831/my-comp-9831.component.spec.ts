import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9831Component } from './my-comp-9831.component';

describe('MyComp9831Component', () => {
  let component: MyComp9831Component;
  let fixture: ComponentFixture<MyComp9831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
