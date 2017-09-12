import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1454Component } from './my-comp-1454.component';

describe('MyComp1454Component', () => {
  let component: MyComp1454Component;
  let fixture: ComponentFixture<MyComp1454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
