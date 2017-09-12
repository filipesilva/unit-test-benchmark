import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8661Component } from './my-comp-8661.component';

describe('MyComp8661Component', () => {
  let component: MyComp8661Component;
  let fixture: ComponentFixture<MyComp8661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
