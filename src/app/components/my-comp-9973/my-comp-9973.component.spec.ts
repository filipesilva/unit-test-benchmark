import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9973Component } from './my-comp-9973.component';

describe('MyComp9973Component', () => {
  let component: MyComp9973Component;
  let fixture: ComponentFixture<MyComp9973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
