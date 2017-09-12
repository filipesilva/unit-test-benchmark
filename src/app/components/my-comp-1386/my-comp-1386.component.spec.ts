import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1386Component } from './my-comp-1386.component';

describe('MyComp1386Component', () => {
  let component: MyComp1386Component;
  let fixture: ComponentFixture<MyComp1386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
