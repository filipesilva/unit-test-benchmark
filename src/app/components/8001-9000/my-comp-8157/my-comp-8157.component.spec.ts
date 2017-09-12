import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8157Component } from './my-comp-8157.component';

describe('MyComp8157Component', () => {
  let component: MyComp8157Component;
  let fixture: ComponentFixture<MyComp8157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
