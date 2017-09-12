import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8497Component } from './my-comp-8497.component';

describe('MyComp8497Component', () => {
  let component: MyComp8497Component;
  let fixture: ComponentFixture<MyComp8497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
