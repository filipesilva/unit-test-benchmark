import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4751Component } from './my-comp-4751.component';

describe('MyComp4751Component', () => {
  let component: MyComp4751Component;
  let fixture: ComponentFixture<MyComp4751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
