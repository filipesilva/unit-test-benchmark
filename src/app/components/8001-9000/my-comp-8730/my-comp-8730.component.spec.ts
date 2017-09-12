import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8730Component } from './my-comp-8730.component';

describe('MyComp8730Component', () => {
  let component: MyComp8730Component;
  let fixture: ComponentFixture<MyComp8730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
