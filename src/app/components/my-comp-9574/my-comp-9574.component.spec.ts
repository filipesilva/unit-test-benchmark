import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9574Component } from './my-comp-9574.component';

describe('MyComp9574Component', () => {
  let component: MyComp9574Component;
  let fixture: ComponentFixture<MyComp9574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
