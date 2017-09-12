import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6476Component } from './my-comp-6476.component';

describe('MyComp6476Component', () => {
  let component: MyComp6476Component;
  let fixture: ComponentFixture<MyComp6476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
