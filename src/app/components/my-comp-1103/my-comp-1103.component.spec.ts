import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1103Component } from './my-comp-1103.component';

describe('MyComp1103Component', () => {
  let component: MyComp1103Component;
  let fixture: ComponentFixture<MyComp1103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
