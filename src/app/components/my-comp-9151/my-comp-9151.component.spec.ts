import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9151Component } from './my-comp-9151.component';

describe('MyComp9151Component', () => {
  let component: MyComp9151Component;
  let fixture: ComponentFixture<MyComp9151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
