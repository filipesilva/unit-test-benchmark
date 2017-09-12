import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4957Component } from './my-comp-4957.component';

describe('MyComp4957Component', () => {
  let component: MyComp4957Component;
  let fixture: ComponentFixture<MyComp4957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
