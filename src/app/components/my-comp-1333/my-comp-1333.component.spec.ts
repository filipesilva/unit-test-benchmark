import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1333Component } from './my-comp-1333.component';

describe('MyComp1333Component', () => {
  let component: MyComp1333Component;
  let fixture: ComponentFixture<MyComp1333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
