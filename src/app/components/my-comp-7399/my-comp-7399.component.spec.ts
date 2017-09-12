import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7399Component } from './my-comp-7399.component';

describe('MyComp7399Component', () => {
  let component: MyComp7399Component;
  let fixture: ComponentFixture<MyComp7399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
