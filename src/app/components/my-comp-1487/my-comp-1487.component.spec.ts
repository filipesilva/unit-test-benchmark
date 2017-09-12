import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1487Component } from './my-comp-1487.component';

describe('MyComp1487Component', () => {
  let component: MyComp1487Component;
  let fixture: ComponentFixture<MyComp1487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
