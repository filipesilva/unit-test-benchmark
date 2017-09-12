import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1544Component } from './my-comp-1544.component';

describe('MyComp1544Component', () => {
  let component: MyComp1544Component;
  let fixture: ComponentFixture<MyComp1544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
