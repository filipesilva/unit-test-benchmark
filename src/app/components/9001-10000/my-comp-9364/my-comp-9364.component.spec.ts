import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9364Component } from './my-comp-9364.component';

describe('MyComp9364Component', () => {
  let component: MyComp9364Component;
  let fixture: ComponentFixture<MyComp9364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
