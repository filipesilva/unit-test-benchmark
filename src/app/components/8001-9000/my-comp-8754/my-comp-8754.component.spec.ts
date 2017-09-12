import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8754Component } from './my-comp-8754.component';

describe('MyComp8754Component', () => {
  let component: MyComp8754Component;
  let fixture: ComponentFixture<MyComp8754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
