import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8151Component } from './my-comp-8151.component';

describe('MyComp8151Component', () => {
  let component: MyComp8151Component;
  let fixture: ComponentFixture<MyComp8151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
