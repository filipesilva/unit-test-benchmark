import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7751Component } from './my-comp-7751.component';

describe('MyComp7751Component', () => {
  let component: MyComp7751Component;
  let fixture: ComponentFixture<MyComp7751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
