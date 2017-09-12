import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6736Component } from './my-comp-6736.component';

describe('MyComp6736Component', () => {
  let component: MyComp6736Component;
  let fixture: ComponentFixture<MyComp6736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
