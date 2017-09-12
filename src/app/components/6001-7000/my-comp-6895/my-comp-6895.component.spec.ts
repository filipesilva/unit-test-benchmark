import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6895Component } from './my-comp-6895.component';

describe('MyComp6895Component', () => {
  let component: MyComp6895Component;
  let fixture: ComponentFixture<MyComp6895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
