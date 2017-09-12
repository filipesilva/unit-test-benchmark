import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2934Component } from './my-comp-2934.component';

describe('MyComp2934Component', () => {
  let component: MyComp2934Component;
  let fixture: ComponentFixture<MyComp2934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
