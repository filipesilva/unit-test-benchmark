import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1416Component } from './my-comp-1416.component';

describe('MyComp1416Component', () => {
  let component: MyComp1416Component;
  let fixture: ComponentFixture<MyComp1416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
