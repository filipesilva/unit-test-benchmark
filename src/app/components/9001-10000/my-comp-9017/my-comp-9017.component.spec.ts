import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9017Component } from './my-comp-9017.component';

describe('MyComp9017Component', () => {
  let component: MyComp9017Component;
  let fixture: ComponentFixture<MyComp9017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
