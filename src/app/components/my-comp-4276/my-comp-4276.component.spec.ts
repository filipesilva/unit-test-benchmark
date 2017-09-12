import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4276Component } from './my-comp-4276.component';

describe('MyComp4276Component', () => {
  let component: MyComp4276Component;
  let fixture: ComponentFixture<MyComp4276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
