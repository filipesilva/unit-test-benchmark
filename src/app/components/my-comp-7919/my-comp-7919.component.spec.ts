import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7919Component } from './my-comp-7919.component';

describe('MyComp7919Component', () => {
  let component: MyComp7919Component;
  let fixture: ComponentFixture<MyComp7919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
