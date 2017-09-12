import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9919Component } from './my-comp-9919.component';

describe('MyComp9919Component', () => {
  let component: MyComp9919Component;
  let fixture: ComponentFixture<MyComp9919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
