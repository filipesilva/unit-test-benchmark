import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8382Component } from './my-comp-8382.component';

describe('MyComp8382Component', () => {
  let component: MyComp8382Component;
  let fixture: ComponentFixture<MyComp8382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
