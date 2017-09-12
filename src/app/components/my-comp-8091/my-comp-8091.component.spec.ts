import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8091Component } from './my-comp-8091.component';

describe('MyComp8091Component', () => {
  let component: MyComp8091Component;
  let fixture: ComponentFixture<MyComp8091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
