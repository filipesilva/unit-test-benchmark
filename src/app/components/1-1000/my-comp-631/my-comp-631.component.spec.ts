import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp631Component } from './my-comp-631.component';

describe('MyComp631Component', () => {
  let component: MyComp631Component;
  let fixture: ComponentFixture<MyComp631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
