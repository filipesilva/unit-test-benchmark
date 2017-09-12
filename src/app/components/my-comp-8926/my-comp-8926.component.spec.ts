import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8926Component } from './my-comp-8926.component';

describe('MyComp8926Component', () => {
  let component: MyComp8926Component;
  let fixture: ComponentFixture<MyComp8926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
