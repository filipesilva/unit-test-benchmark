import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp828Component } from './my-comp-828.component';

describe('MyComp828Component', () => {
  let component: MyComp828Component;
  let fixture: ComponentFixture<MyComp828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
