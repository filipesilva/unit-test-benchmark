import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6368Component } from './my-comp-6368.component';

describe('MyComp6368Component', () => {
  let component: MyComp6368Component;
  let fixture: ComponentFixture<MyComp6368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
