import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5831Component } from './my-comp-5831.component';

describe('MyComp5831Component', () => {
  let component: MyComp5831Component;
  let fixture: ComponentFixture<MyComp5831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
