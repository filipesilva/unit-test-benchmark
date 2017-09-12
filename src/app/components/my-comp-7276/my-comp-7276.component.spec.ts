import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7276Component } from './my-comp-7276.component';

describe('MyComp7276Component', () => {
  let component: MyComp7276Component;
  let fixture: ComponentFixture<MyComp7276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
