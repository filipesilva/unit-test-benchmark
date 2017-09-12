import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8663Component } from './my-comp-8663.component';

describe('MyComp8663Component', () => {
  let component: MyComp8663Component;
  let fixture: ComponentFixture<MyComp8663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
