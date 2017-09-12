import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5386Component } from './my-comp-5386.component';

describe('MyComp5386Component', () => {
  let component: MyComp5386Component;
  let fixture: ComponentFixture<MyComp5386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
