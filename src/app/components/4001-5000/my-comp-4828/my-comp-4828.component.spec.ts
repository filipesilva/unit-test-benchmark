import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4828Component } from './my-comp-4828.component';

describe('MyComp4828Component', () => {
  let component: MyComp4828Component;
  let fixture: ComponentFixture<MyComp4828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
