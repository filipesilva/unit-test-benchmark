import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7828Component } from './my-comp-7828.component';

describe('MyComp7828Component', () => {
  let component: MyComp7828Component;
  let fixture: ComponentFixture<MyComp7828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
