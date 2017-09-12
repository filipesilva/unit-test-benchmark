import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4423Component } from './my-comp-4423.component';

describe('MyComp4423Component', () => {
  let component: MyComp4423Component;
  let fixture: ComponentFixture<MyComp4423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
