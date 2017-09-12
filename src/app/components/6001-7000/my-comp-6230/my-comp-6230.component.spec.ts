import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6230Component } from './my-comp-6230.component';

describe('MyComp6230Component', () => {
  let component: MyComp6230Component;
  let fixture: ComponentFixture<MyComp6230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
