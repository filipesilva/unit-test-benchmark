import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6035Component } from './my-comp-6035.component';

describe('MyComp6035Component', () => {
  let component: MyComp6035Component;
  let fixture: ComponentFixture<MyComp6035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
