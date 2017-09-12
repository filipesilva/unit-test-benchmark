import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9677Component } from './my-comp-9677.component';

describe('MyComp9677Component', () => {
  let component: MyComp9677Component;
  let fixture: ComponentFixture<MyComp9677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
