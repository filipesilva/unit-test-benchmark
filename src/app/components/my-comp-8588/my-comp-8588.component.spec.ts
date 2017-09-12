import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8588Component } from './my-comp-8588.component';

describe('MyComp8588Component', () => {
  let component: MyComp8588Component;
  let fixture: ComponentFixture<MyComp8588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
