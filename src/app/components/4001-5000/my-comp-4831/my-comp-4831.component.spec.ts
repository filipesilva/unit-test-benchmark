import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4831Component } from './my-comp-4831.component';

describe('MyComp4831Component', () => {
  let component: MyComp4831Component;
  let fixture: ComponentFixture<MyComp4831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
