import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6661Component } from './my-comp-6661.component';

describe('MyComp6661Component', () => {
  let component: MyComp6661Component;
  let fixture: ComponentFixture<MyComp6661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
