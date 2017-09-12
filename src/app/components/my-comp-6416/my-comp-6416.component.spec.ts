import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6416Component } from './my-comp-6416.component';

describe('MyComp6416Component', () => {
  let component: MyComp6416Component;
  let fixture: ComponentFixture<MyComp6416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
