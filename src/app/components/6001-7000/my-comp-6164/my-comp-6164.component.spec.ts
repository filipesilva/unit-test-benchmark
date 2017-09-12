import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6164Component } from './my-comp-6164.component';

describe('MyComp6164Component', () => {
  let component: MyComp6164Component;
  let fixture: ComponentFixture<MyComp6164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
