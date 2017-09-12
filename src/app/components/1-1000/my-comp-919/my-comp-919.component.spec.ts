import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp919Component } from './my-comp-919.component';

describe('MyComp919Component', () => {
  let component: MyComp919Component;
  let fixture: ComponentFixture<MyComp919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
