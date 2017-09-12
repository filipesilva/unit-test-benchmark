import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6714Component } from './my-comp-6714.component';

describe('MyComp6714Component', () => {
  let component: MyComp6714Component;
  let fixture: ComponentFixture<MyComp6714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
