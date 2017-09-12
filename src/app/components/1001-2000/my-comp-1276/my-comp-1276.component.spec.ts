import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1276Component } from './my-comp-1276.component';

describe('MyComp1276Component', () => {
  let component: MyComp1276Component;
  let fixture: ComponentFixture<MyComp1276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
