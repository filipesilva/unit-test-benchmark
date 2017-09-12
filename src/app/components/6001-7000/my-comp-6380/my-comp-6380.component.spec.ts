import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6380Component } from './my-comp-6380.component';

describe('MyComp6380Component', () => {
  let component: MyComp6380Component;
  let fixture: ComponentFixture<MyComp6380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
