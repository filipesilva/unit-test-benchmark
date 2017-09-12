import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9662Component } from './my-comp-9662.component';

describe('MyComp9662Component', () => {
  let component: MyComp9662Component;
  let fixture: ComponentFixture<MyComp9662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
