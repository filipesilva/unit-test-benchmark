import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8502Component } from './my-comp-8502.component';

describe('MyComp8502Component', () => {
  let component: MyComp8502Component;
  let fixture: ComponentFixture<MyComp8502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
