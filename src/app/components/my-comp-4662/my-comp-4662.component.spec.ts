import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4662Component } from './my-comp-4662.component';

describe('MyComp4662Component', () => {
  let component: MyComp4662Component;
  let fixture: ComponentFixture<MyComp4662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
