import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6306Component } from './my-comp-6306.component';

describe('MyComp6306Component', () => {
  let component: MyComp6306Component;
  let fixture: ComponentFixture<MyComp6306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
