import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9848Component } from './my-comp-9848.component';

describe('MyComp9848Component', () => {
  let component: MyComp9848Component;
  let fixture: ComponentFixture<MyComp9848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
