import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6741Component } from './my-comp-6741.component';

describe('MyComp6741Component', () => {
  let component: MyComp6741Component;
  let fixture: ComponentFixture<MyComp6741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
