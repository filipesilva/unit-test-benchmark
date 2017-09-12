import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1831Component } from './my-comp-1831.component';

describe('MyComp1831Component', () => {
  let component: MyComp1831Component;
  let fixture: ComponentFixture<MyComp1831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
