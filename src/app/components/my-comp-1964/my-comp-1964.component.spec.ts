import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1964Component } from './my-comp-1964.component';

describe('MyComp1964Component', () => {
  let component: MyComp1964Component;
  let fixture: ComponentFixture<MyComp1964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
