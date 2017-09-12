import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3831Component } from './my-comp-3831.component';

describe('MyComp3831Component', () => {
  let component: MyComp3831Component;
  let fixture: ComponentFixture<MyComp3831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
