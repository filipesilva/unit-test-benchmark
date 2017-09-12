import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9920Component } from './my-comp-9920.component';

describe('MyComp9920Component', () => {
  let component: MyComp9920Component;
  let fixture: ComponentFixture<MyComp9920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
