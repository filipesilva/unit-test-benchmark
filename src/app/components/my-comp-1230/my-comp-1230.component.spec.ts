import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1230Component } from './my-comp-1230.component';

describe('MyComp1230Component', () => {
  let component: MyComp1230Component;
  let fixture: ComponentFixture<MyComp1230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
