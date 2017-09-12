import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8564Component } from './my-comp-8564.component';

describe('MyComp8564Component', () => {
  let component: MyComp8564Component;
  let fixture: ComponentFixture<MyComp8564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
