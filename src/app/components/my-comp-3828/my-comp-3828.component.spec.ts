import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3828Component } from './my-comp-3828.component';

describe('MyComp3828Component', () => {
  let component: MyComp3828Component;
  let fixture: ComponentFixture<MyComp3828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
