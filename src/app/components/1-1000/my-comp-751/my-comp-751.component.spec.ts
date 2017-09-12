import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp751Component } from './my-comp-751.component';

describe('MyComp751Component', () => {
  let component: MyComp751Component;
  let fixture: ComponentFixture<MyComp751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
