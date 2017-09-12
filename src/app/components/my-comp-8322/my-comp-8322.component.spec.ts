import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8322Component } from './my-comp-8322.component';

describe('MyComp8322Component', () => {
  let component: MyComp8322Component;
  let fixture: ComponentFixture<MyComp8322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
