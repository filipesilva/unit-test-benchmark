import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8626Component } from './my-comp-8626.component';

describe('MyComp8626Component', () => {
  let component: MyComp8626Component;
  let fixture: ComponentFixture<MyComp8626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
