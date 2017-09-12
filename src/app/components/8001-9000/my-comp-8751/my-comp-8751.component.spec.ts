import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8751Component } from './my-comp-8751.component';

describe('MyComp8751Component', () => {
  let component: MyComp8751Component;
  let fixture: ComponentFixture<MyComp8751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
