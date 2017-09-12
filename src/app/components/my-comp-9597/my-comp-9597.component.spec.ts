import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9597Component } from './my-comp-9597.component';

describe('MyComp9597Component', () => {
  let component: MyComp9597Component;
  let fixture: ComponentFixture<MyComp9597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
