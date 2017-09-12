import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8457Component } from './my-comp-8457.component';

describe('MyComp8457Component', () => {
  let component: MyComp8457Component;
  let fixture: ComponentFixture<MyComp8457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
