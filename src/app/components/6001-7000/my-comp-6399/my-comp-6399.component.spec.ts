import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6399Component } from './my-comp-6399.component';

describe('MyComp6399Component', () => {
  let component: MyComp6399Component;
  let fixture: ComponentFixture<MyComp6399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
