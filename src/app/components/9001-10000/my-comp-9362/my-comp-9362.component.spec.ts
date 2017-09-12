import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9362Component } from './my-comp-9362.component';

describe('MyComp9362Component', () => {
  let component: MyComp9362Component;
  let fixture: ComponentFixture<MyComp9362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
