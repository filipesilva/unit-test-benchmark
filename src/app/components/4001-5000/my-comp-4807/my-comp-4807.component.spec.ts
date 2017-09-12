import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4807Component } from './my-comp-4807.component';

describe('MyComp4807Component', () => {
  let component: MyComp4807Component;
  let fixture: ComponentFixture<MyComp4807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
