import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2812Component } from './my-comp-2812.component';

describe('MyComp2812Component', () => {
  let component: MyComp2812Component;
  let fixture: ComponentFixture<MyComp2812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
