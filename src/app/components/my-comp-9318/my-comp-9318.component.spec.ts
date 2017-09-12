import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9318Component } from './my-comp-9318.component';

describe('MyComp9318Component', () => {
  let component: MyComp9318Component;
  let fixture: ComponentFixture<MyComp9318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
