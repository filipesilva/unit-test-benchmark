import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4416Component } from './my-comp-4416.component';

describe('MyComp4416Component', () => {
  let component: MyComp4416Component;
  let fixture: ComponentFixture<MyComp4416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
