import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9423Component } from './my-comp-9423.component';

describe('MyComp9423Component', () => {
  let component: MyComp9423Component;
  let fixture: ComponentFixture<MyComp9423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
