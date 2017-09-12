import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5623Component } from './my-comp-5623.component';

describe('MyComp5623Component', () => {
  let component: MyComp5623Component;
  let fixture: ComponentFixture<MyComp5623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
