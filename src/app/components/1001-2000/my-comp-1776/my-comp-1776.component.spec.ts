import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1776Component } from './my-comp-1776.component';

describe('MyComp1776Component', () => {
  let component: MyComp1776Component;
  let fixture: ComponentFixture<MyComp1776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
