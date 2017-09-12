import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2306Component } from './my-comp-2306.component';

describe('MyComp2306Component', () => {
  let component: MyComp2306Component;
  let fixture: ComponentFixture<MyComp2306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
