import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1414Component } from './my-comp-1414.component';

describe('MyComp1414Component', () => {
  let component: MyComp1414Component;
  let fixture: ComponentFixture<MyComp1414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
