import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9871Component } from './my-comp-9871.component';

describe('MyComp9871Component', () => {
  let component: MyComp9871Component;
  let fixture: ComponentFixture<MyComp9871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
