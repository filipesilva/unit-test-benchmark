import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4643Component } from './my-comp-4643.component';

describe('MyComp4643Component', () => {
  let component: MyComp4643Component;
  let fixture: ComponentFixture<MyComp4643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
