import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6291Component } from './my-comp-6291.component';

describe('MyComp6291Component', () => {
  let component: MyComp6291Component;
  let fixture: ComponentFixture<MyComp6291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
