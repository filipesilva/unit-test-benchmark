import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1179Component } from './my-comp-1179.component';

describe('MyComp1179Component', () => {
  let component: MyComp1179Component;
  let fixture: ComponentFixture<MyComp1179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
