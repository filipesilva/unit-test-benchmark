import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8544Component } from './my-comp-8544.component';

describe('MyComp8544Component', () => {
  let component: MyComp8544Component;
  let fixture: ComponentFixture<MyComp8544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
