import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2103Component } from './my-comp-2103.component';

describe('MyComp2103Component', () => {
  let component: MyComp2103Component;
  let fixture: ComponentFixture<MyComp2103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
