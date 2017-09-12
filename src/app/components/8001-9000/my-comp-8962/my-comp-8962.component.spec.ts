import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8962Component } from './my-comp-8962.component';

describe('MyComp8962Component', () => {
  let component: MyComp8962Component;
  let fixture: ComponentFixture<MyComp8962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
