import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1739Component } from './my-comp-1739.component';

describe('MyComp1739Component', () => {
  let component: MyComp1739Component;
  let fixture: ComponentFixture<MyComp1739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
