import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2828Component } from './my-comp-2828.component';

describe('MyComp2828Component', () => {
  let component: MyComp2828Component;
  let fixture: ComponentFixture<MyComp2828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
