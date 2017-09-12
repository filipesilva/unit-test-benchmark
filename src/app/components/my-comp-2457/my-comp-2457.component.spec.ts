import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2457Component } from './my-comp-2457.component';

describe('MyComp2457Component', () => {
  let component: MyComp2457Component;
  let fixture: ComponentFixture<MyComp2457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
