import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8920Component } from './my-comp-8920.component';

describe('MyComp8920Component', () => {
  let component: MyComp8920Component;
  let fixture: ComponentFixture<MyComp8920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
