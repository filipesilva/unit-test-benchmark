import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9751Component } from './my-comp-9751.component';

describe('MyComp9751Component', () => {
  let component: MyComp9751Component;
  let fixture: ComponentFixture<MyComp9751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
