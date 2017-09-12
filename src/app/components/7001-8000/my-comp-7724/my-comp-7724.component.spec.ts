import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7724Component } from './my-comp-7724.component';

describe('MyComp7724Component', () => {
  let component: MyComp7724Component;
  let fixture: ComponentFixture<MyComp7724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
