import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9049Component } from './my-comp-9049.component';

describe('MyComp9049Component', () => {
  let component: MyComp9049Component;
  let fixture: ComponentFixture<MyComp9049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
