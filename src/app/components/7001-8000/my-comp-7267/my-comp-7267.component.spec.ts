import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7267Component } from './my-comp-7267.component';

describe('MyComp7267Component', () => {
  let component: MyComp7267Component;
  let fixture: ComponentFixture<MyComp7267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
