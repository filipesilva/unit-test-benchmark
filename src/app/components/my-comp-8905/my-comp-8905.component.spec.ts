import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8905Component } from './my-comp-8905.component';

describe('MyComp8905Component', () => {
  let component: MyComp8905Component;
  let fixture: ComponentFixture<MyComp8905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
