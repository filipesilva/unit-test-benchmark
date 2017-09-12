import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8103Component } from './my-comp-8103.component';

describe('MyComp8103Component', () => {
  let component: MyComp8103Component;
  let fixture: ComponentFixture<MyComp8103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
