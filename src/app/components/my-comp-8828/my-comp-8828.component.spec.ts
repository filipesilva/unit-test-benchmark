import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8828Component } from './my-comp-8828.component';

describe('MyComp8828Component', () => {
  let component: MyComp8828Component;
  let fixture: ComponentFixture<MyComp8828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
