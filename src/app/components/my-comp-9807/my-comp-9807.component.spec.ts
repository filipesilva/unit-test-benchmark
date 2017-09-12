import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9807Component } from './my-comp-9807.component';

describe('MyComp9807Component', () => {
  let component: MyComp9807Component;
  let fixture: ComponentFixture<MyComp9807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
