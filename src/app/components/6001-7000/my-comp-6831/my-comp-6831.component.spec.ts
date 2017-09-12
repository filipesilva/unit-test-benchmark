import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6831Component } from './my-comp-6831.component';

describe('MyComp6831Component', () => {
  let component: MyComp6831Component;
  let fixture: ComponentFixture<MyComp6831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
