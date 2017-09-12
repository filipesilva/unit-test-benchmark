import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9754Component } from './my-comp-9754.component';

describe('MyComp9754Component', () => {
  let component: MyComp9754Component;
  let fixture: ComponentFixture<MyComp9754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
