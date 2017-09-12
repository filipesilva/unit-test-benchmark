import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4544Component } from './my-comp-4544.component';

describe('MyComp4544Component', () => {
  let component: MyComp4544Component;
  let fixture: ComponentFixture<MyComp4544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
