import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6658Component } from './my-comp-6658.component';

describe('MyComp6658Component', () => {
  let component: MyComp6658Component;
  let fixture: ComponentFixture<MyComp6658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
