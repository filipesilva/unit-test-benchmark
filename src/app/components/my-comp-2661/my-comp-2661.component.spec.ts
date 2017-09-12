import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2661Component } from './my-comp-2661.component';

describe('MyComp2661Component', () => {
  let component: MyComp2661Component;
  let fixture: ComponentFixture<MyComp2661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
