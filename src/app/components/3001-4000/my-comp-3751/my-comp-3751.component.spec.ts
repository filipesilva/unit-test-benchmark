import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3751Component } from './my-comp-3751.component';

describe('MyComp3751Component', () => {
  let component: MyComp3751Component;
  let fixture: ComponentFixture<MyComp3751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
