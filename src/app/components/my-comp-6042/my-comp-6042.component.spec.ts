import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6042Component } from './my-comp-6042.component';

describe('MyComp6042Component', () => {
  let component: MyComp6042Component;
  let fixture: ComponentFixture<MyComp6042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
