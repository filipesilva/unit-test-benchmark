import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9210Component } from './my-comp-9210.component';

describe('MyComp9210Component', () => {
  let component: MyComp9210Component;
  let fixture: ComponentFixture<MyComp9210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
