import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4611Component } from './my-comp-4611.component';

describe('MyComp4611Component', () => {
  let component: MyComp4611Component;
  let fixture: ComponentFixture<MyComp4611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
