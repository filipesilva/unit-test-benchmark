import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8494Component } from './my-comp-8494.component';

describe('MyComp8494Component', () => {
  let component: MyComp8494Component;
  let fixture: ComponentFixture<MyComp8494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
