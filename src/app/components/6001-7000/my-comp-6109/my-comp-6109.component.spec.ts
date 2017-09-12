import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6109Component } from './my-comp-6109.component';

describe('MyComp6109Component', () => {
  let component: MyComp6109Component;
  let fixture: ComponentFixture<MyComp6109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
