import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7607Component } from './my-comp-7607.component';

describe('MyComp7607Component', () => {
  let component: MyComp7607Component;
  let fixture: ComponentFixture<MyComp7607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
