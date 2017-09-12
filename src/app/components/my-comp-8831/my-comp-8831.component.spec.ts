import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8831Component } from './my-comp-8831.component';

describe('MyComp8831Component', () => {
  let component: MyComp8831Component;
  let fixture: ComponentFixture<MyComp8831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
