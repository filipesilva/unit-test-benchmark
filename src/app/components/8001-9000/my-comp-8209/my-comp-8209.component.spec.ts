import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8209Component } from './my-comp-8209.component';

describe('MyComp8209Component', () => {
  let component: MyComp8209Component;
  let fixture: ComponentFixture<MyComp8209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
