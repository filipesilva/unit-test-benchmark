import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp238Component } from './my-comp-238.component';

describe('MyComp238Component', () => {
  let component: MyComp238Component;
  let fixture: ComponentFixture<MyComp238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
