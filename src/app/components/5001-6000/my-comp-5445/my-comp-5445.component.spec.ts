import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5445Component } from './my-comp-5445.component';

describe('MyComp5445Component', () => {
  let component: MyComp5445Component;
  let fixture: ComponentFixture<MyComp5445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
