import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5751Component } from './my-comp-5751.component';

describe('MyComp5751Component', () => {
  let component: MyComp5751Component;
  let fixture: ComponentFixture<MyComp5751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
