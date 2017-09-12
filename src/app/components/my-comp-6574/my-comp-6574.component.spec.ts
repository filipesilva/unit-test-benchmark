import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6574Component } from './my-comp-6574.component';

describe('MyComp6574Component', () => {
  let component: MyComp6574Component;
  let fixture: ComponentFixture<MyComp6574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
