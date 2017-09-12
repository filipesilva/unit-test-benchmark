import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9103Component } from './my-comp-9103.component';

describe('MyComp9103Component', () => {
  let component: MyComp9103Component;
  let fixture: ComponentFixture<MyComp9103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
