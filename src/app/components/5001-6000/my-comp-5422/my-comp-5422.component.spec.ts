import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5422Component } from './my-comp-5422.component';

describe('MyComp5422Component', () => {
  let component: MyComp5422Component;
  let fixture: ComponentFixture<MyComp5422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
