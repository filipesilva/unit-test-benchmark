import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6322Component } from './my-comp-6322.component';

describe('MyComp6322Component', () => {
  let component: MyComp6322Component;
  let fixture: ComponentFixture<MyComp6322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
