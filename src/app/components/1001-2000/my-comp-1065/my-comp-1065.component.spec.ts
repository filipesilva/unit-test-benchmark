import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1065Component } from './my-comp-1065.component';

describe('MyComp1065Component', () => {
  let component: MyComp1065Component;
  let fixture: ComponentFixture<MyComp1065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
