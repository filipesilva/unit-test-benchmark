import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8704Component } from './my-comp-8704.component';

describe('MyComp8704Component', () => {
  let component: MyComp8704Component;
  let fixture: ComponentFixture<MyComp8704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
