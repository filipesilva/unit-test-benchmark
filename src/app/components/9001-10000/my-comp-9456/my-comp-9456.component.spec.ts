import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9456Component } from './my-comp-9456.component';

describe('MyComp9456Component', () => {
  let component: MyComp9456Component;
  let fixture: ComponentFixture<MyComp9456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
