import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6919Component } from './my-comp-6919.component';

describe('MyComp6919Component', () => {
  let component: MyComp6919Component;
  let fixture: ComponentFixture<MyComp6919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
