import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9445Component } from './my-comp-9445.component';

describe('MyComp9445Component', () => {
  let component: MyComp9445Component;
  let fixture: ComponentFixture<MyComp9445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
