import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8312Component } from './my-comp-8312.component';

describe('MyComp8312Component', () => {
  let component: MyComp8312Component;
  let fixture: ComponentFixture<MyComp8312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
