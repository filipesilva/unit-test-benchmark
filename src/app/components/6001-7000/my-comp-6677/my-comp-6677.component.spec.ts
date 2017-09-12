import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6677Component } from './my-comp-6677.component';

describe('MyComp6677Component', () => {
  let component: MyComp6677Component;
  let fixture: ComponentFixture<MyComp6677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
