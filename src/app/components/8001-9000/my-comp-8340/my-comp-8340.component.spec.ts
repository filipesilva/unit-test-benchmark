import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8340Component } from './my-comp-8340.component';

describe('MyComp8340Component', () => {
  let component: MyComp8340Component;
  let fixture: ComponentFixture<MyComp8340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
