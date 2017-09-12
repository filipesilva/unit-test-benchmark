import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9164Component } from './my-comp-9164.component';

describe('MyComp9164Component', () => {
  let component: MyComp9164Component;
  let fixture: ComponentFixture<MyComp9164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
