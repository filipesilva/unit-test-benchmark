import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9802Component } from './my-comp-9802.component';

describe('MyComp9802Component', () => {
  let component: MyComp9802Component;
  let fixture: ComponentFixture<MyComp9802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
