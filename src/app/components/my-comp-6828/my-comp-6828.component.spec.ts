import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6828Component } from './my-comp-6828.component';

describe('MyComp6828Component', () => {
  let component: MyComp6828Component;
  let fixture: ComponentFixture<MyComp6828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
