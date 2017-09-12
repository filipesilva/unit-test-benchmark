import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7416Component } from './my-comp-7416.component';

describe('MyComp7416Component', () => {
  let component: MyComp7416Component;
  let fixture: ComponentFixture<MyComp7416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
