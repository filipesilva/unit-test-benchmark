import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2291Component } from './my-comp-2291.component';

describe('MyComp2291Component', () => {
  let component: MyComp2291Component;
  let fixture: ComponentFixture<MyComp2291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
