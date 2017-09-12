import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9711Component } from './my-comp-9711.component';

describe('MyComp9711Component', () => {
  let component: MyComp9711Component;
  let fixture: ComponentFixture<MyComp9711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
