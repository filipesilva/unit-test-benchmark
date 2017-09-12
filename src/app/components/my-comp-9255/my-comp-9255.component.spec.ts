import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9255Component } from './my-comp-9255.component';

describe('MyComp9255Component', () => {
  let component: MyComp9255Component;
  let fixture: ComponentFixture<MyComp9255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
