import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp912Component } from './my-comp-912.component';

describe('MyComp912Component', () => {
  let component: MyComp912Component;
  let fixture: ComponentFixture<MyComp912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
