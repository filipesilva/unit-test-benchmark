import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4168Component } from './my-comp-4168.component';

describe('MyComp4168Component', () => {
  let component: MyComp4168Component;
  let fixture: ComponentFixture<MyComp4168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
