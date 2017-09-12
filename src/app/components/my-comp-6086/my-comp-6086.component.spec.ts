import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6086Component } from './my-comp-6086.component';

describe('MyComp6086Component', () => {
  let component: MyComp6086Component;
  let fixture: ComponentFixture<MyComp6086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
