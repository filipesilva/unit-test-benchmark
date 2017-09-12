import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6456Component } from './my-comp-6456.component';

describe('MyComp6456Component', () => {
  let component: MyComp6456Component;
  let fixture: ComponentFixture<MyComp6456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
