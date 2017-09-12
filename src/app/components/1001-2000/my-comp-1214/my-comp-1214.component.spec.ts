import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1214Component } from './my-comp-1214.component';

describe('MyComp1214Component', () => {
  let component: MyComp1214Component;
  let fixture: ComponentFixture<MyComp1214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
