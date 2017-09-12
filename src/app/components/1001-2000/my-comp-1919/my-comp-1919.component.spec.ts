import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1919Component } from './my-comp-1919.component';

describe('MyComp1919Component', () => {
  let component: MyComp1919Component;
  let fixture: ComponentFixture<MyComp1919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
