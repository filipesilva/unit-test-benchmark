import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6751Component } from './my-comp-6751.component';

describe('MyComp6751Component', () => {
  let component: MyComp6751Component;
  let fixture: ComponentFixture<MyComp6751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
