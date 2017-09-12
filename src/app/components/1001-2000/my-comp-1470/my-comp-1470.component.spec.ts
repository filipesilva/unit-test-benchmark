import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1470Component } from './my-comp-1470.component';

describe('MyComp1470Component', () => {
  let component: MyComp1470Component;
  let fixture: ComponentFixture<MyComp1470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
