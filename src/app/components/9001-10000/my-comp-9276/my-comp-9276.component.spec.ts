import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9276Component } from './my-comp-9276.component';

describe('MyComp9276Component', () => {
  let component: MyComp9276Component;
  let fixture: ComponentFixture<MyComp9276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
