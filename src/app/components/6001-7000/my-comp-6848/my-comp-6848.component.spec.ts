import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6848Component } from './my-comp-6848.component';

describe('MyComp6848Component', () => {
  let component: MyComp6848Component;
  let fixture: ComponentFixture<MyComp6848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
