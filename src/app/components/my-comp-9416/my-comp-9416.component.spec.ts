import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9416Component } from './my-comp-9416.component';

describe('MyComp9416Component', () => {
  let component: MyComp9416Component;
  let fixture: ComponentFixture<MyComp9416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
