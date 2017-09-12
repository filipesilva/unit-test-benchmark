import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp715Component } from './my-comp-715.component';

describe('MyComp715Component', () => {
  let component: MyComp715Component;
  let fixture: ComponentFixture<MyComp715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
