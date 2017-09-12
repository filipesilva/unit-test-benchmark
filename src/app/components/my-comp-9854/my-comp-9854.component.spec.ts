import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9854Component } from './my-comp-9854.component';

describe('MyComp9854Component', () => {
  let component: MyComp9854Component;
  let fixture: ComponentFixture<MyComp9854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
