import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6623Component } from './my-comp-6623.component';

describe('MyComp6623Component', () => {
  let component: MyComp6623Component;
  let fixture: ComponentFixture<MyComp6623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
