import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8186Component } from './my-comp-8186.component';

describe('MyComp8186Component', () => {
  let component: MyComp8186Component;
  let fixture: ComponentFixture<MyComp8186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
