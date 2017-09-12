import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5919Component } from './my-comp-5919.component';

describe('MyComp5919Component', () => {
  let component: MyComp5919Component;
  let fixture: ComponentFixture<MyComp5919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
