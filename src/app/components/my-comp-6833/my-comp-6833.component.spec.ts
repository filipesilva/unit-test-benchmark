import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6833Component } from './my-comp-6833.component';

describe('MyComp6833Component', () => {
  let component: MyComp6833Component;
  let fixture: ComponentFixture<MyComp6833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
