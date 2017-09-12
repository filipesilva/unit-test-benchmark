import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5019Component } from './my-comp-5019.component';

describe('MyComp5019Component', () => {
  let component: MyComp5019Component;
  let fixture: ComponentFixture<MyComp5019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
