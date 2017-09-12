import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6627Component } from './my-comp-6627.component';

describe('MyComp6627Component', () => {
  let component: MyComp6627Component;
  let fixture: ComponentFixture<MyComp6627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
