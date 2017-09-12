import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp276Component } from './my-comp-276.component';

describe('MyComp276Component', () => {
  let component: MyComp276Component;
  let fixture: ComponentFixture<MyComp276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
