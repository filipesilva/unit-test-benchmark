import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp544Component } from './my-comp-544.component';

describe('MyComp544Component', () => {
  let component: MyComp544Component;
  let fixture: ComponentFixture<MyComp544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
