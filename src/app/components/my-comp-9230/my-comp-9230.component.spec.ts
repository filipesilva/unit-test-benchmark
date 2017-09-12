import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9230Component } from './my-comp-9230.component';

describe('MyComp9230Component', () => {
  let component: MyComp9230Component;
  let fixture: ComponentFixture<MyComp9230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
