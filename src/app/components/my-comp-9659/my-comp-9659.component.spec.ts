import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9659Component } from './my-comp-9659.component';

describe('MyComp9659Component', () => {
  let component: MyComp9659Component;
  let fixture: ComponentFixture<MyComp9659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
