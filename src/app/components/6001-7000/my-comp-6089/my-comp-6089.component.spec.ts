import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6089Component } from './my-comp-6089.component';

describe('MyComp6089Component', () => {
  let component: MyComp6089Component;
  let fixture: ComponentFixture<MyComp6089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
