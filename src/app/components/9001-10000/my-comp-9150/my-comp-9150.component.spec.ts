import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9150Component } from './my-comp-9150.component';

describe('MyComp9150Component', () => {
  let component: MyComp9150Component;
  let fixture: ComponentFixture<MyComp9150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
