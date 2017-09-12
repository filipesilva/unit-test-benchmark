import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5662Component } from './my-comp-5662.component';

describe('MyComp5662Component', () => {
  let component: MyComp5662Component;
  let fixture: ComponentFixture<MyComp5662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
