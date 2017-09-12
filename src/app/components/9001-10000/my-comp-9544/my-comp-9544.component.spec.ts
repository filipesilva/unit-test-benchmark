import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9544Component } from './my-comp-9544.component';

describe('MyComp9544Component', () => {
  let component: MyComp9544Component;
  let fixture: ComponentFixture<MyComp9544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
