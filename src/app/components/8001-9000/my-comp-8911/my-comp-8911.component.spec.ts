import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8911Component } from './my-comp-8911.component';

describe('MyComp8911Component', () => {
  let component: MyComp8911Component;
  let fixture: ComponentFixture<MyComp8911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
