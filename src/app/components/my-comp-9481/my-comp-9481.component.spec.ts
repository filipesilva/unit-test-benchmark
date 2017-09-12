import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9481Component } from './my-comp-9481.component';

describe('MyComp9481Component', () => {
  let component: MyComp9481Component;
  let fixture: ComponentFixture<MyComp9481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
