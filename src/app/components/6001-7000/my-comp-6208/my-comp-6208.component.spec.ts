import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6208Component } from './my-comp-6208.component';

describe('MyComp6208Component', () => {
  let component: MyComp6208Component;
  let fixture: ComponentFixture<MyComp6208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
