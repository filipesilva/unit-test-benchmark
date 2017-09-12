import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8541Component } from './my-comp-8541.component';

describe('MyComp8541Component', () => {
  let component: MyComp8541Component;
  let fixture: ComponentFixture<MyComp8541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
