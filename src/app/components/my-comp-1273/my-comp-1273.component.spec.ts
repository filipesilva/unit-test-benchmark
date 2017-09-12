import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1273Component } from './my-comp-1273.component';

describe('MyComp1273Component', () => {
  let component: MyComp1273Component;
  let fixture: ComponentFixture<MyComp1273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
