import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9477Component } from './my-comp-9477.component';

describe('MyComp9477Component', () => {
  let component: MyComp9477Component;
  let fixture: ComponentFixture<MyComp9477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
