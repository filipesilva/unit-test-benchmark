import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8727Component } from './my-comp-8727.component';

describe('MyComp8727Component', () => {
  let component: MyComp8727Component;
  let fixture: ComponentFixture<MyComp8727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
