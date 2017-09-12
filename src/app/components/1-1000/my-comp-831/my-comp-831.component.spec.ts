import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp831Component } from './my-comp-831.component';

describe('MyComp831Component', () => {
  let component: MyComp831Component;
  let fixture: ComponentFixture<MyComp831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
