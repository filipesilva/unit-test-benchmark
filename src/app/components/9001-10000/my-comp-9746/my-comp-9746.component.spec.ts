import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9746Component } from './my-comp-9746.component';

describe('MyComp9746Component', () => {
  let component: MyComp9746Component;
  let fixture: ComponentFixture<MyComp9746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
