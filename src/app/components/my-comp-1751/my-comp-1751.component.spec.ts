import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1751Component } from './my-comp-1751.component';

describe('MyComp1751Component', () => {
  let component: MyComp1751Component;
  let fixture: ComponentFixture<MyComp1751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
