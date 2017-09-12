import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9828Component } from './my-comp-9828.component';

describe('MyComp9828Component', () => {
  let component: MyComp9828Component;
  let fixture: ComponentFixture<MyComp9828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
