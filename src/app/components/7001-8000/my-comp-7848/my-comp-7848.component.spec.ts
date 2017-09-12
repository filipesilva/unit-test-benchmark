import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7848Component } from './my-comp-7848.component';

describe('MyComp7848Component', () => {
  let component: MyComp7848Component;
  let fixture: ComponentFixture<MyComp7848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
