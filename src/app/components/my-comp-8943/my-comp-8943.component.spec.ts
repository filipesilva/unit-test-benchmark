import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8943Component } from './my-comp-8943.component';

describe('MyComp8943Component', () => {
  let component: MyComp8943Component;
  let fixture: ComponentFixture<MyComp8943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
