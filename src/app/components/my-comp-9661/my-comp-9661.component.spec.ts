import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9661Component } from './my-comp-9661.component';

describe('MyComp9661Component', () => {
  let component: MyComp9661Component;
  let fixture: ComponentFixture<MyComp9661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
