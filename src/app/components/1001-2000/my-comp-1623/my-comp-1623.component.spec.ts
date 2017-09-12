import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1623Component } from './my-comp-1623.component';

describe('MyComp1623Component', () => {
  let component: MyComp1623Component;
  let fixture: ComponentFixture<MyComp1623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
