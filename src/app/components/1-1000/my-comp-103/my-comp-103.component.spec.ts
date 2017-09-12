import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp103Component } from './my-comp-103.component';

describe('MyComp103Component', () => {
  let component: MyComp103Component;
  let fixture: ComponentFixture<MyComp103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
