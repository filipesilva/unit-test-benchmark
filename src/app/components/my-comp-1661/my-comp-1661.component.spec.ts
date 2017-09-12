import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1661Component } from './my-comp-1661.component';

describe('MyComp1661Component', () => {
  let component: MyComp1661Component;
  let fixture: ComponentFixture<MyComp1661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
