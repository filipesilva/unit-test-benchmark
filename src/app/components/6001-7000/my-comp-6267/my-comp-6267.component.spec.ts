import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6267Component } from './my-comp-6267.component';

describe('MyComp6267Component', () => {
  let component: MyComp6267Component;
  let fixture: ComponentFixture<MyComp6267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
