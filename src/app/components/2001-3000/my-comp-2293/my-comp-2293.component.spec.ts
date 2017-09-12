import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2293Component } from './my-comp-2293.component';

describe('MyComp2293Component', () => {
  let component: MyComp2293Component;
  let fixture: ComponentFixture<MyComp2293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
