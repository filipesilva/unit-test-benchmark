import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5828Component } from './my-comp-5828.component';

describe('MyComp5828Component', () => {
  let component: MyComp5828Component;
  let fixture: ComponentFixture<MyComp5828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
