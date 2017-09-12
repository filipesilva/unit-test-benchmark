import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9722Component } from './my-comp-9722.component';

describe('MyComp9722Component', () => {
  let component: MyComp9722Component;
  let fixture: ComponentFixture<MyComp9722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
