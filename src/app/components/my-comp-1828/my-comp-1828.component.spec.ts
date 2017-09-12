import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1828Component } from './my-comp-1828.component';

describe('MyComp1828Component', () => {
  let component: MyComp1828Component;
  let fixture: ComponentFixture<MyComp1828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
