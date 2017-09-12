import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9502Component } from './my-comp-9502.component';

describe('MyComp9502Component', () => {
  let component: MyComp9502Component;
  let fixture: ComponentFixture<MyComp9502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
