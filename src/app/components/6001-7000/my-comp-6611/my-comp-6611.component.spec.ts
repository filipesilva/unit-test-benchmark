import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6611Component } from './my-comp-6611.component';

describe('MyComp6611Component', () => {
  let component: MyComp6611Component;
  let fixture: ComponentFixture<MyComp6611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
