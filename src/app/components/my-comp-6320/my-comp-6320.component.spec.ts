import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6320Component } from './my-comp-6320.component';

describe('MyComp6320Component', () => {
  let component: MyComp6320Component;
  let fixture: ComponentFixture<MyComp6320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
