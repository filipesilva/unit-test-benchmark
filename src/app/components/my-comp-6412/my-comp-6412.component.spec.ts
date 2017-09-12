import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6412Component } from './my-comp-6412.component';

describe('MyComp6412Component', () => {
  let component: MyComp6412Component;
  let fixture: ComponentFixture<MyComp6412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
