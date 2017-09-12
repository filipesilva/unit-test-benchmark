import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6561Component } from './my-comp-6561.component';

describe('MyComp6561Component', () => {
  let component: MyComp6561Component;
  let fixture: ComponentFixture<MyComp6561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
