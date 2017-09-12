import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2751Component } from './my-comp-2751.component';

describe('MyComp2751Component', () => {
  let component: MyComp2751Component;
  let fixture: ComponentFixture<MyComp2751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
