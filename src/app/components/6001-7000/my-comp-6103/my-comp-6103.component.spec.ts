import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6103Component } from './my-comp-6103.component';

describe('MyComp6103Component', () => {
  let component: MyComp6103Component;
  let fixture: ComponentFixture<MyComp6103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
