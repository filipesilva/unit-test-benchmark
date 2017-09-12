import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6078Component } from './my-comp-6078.component';

describe('MyComp6078Component', () => {
  let component: MyComp6078Component;
  let fixture: ComponentFixture<MyComp6078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
