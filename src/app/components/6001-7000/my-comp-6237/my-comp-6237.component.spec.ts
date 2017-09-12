import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6237Component } from './my-comp-6237.component';

describe('MyComp6237Component', () => {
  let component: MyComp6237Component;
  let fixture: ComponentFixture<MyComp6237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
