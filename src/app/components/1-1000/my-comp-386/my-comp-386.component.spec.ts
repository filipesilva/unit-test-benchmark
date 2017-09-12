import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp386Component } from './my-comp-386.component';

describe('MyComp386Component', () => {
  let component: MyComp386Component;
  let fixture: ComponentFixture<MyComp386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
