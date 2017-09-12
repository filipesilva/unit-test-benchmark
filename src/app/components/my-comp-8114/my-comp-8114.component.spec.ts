import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8114Component } from './my-comp-8114.component';

describe('MyComp8114Component', () => {
  let component: MyComp8114Component;
  let fixture: ComponentFixture<MyComp8114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
