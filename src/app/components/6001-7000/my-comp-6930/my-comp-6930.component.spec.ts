import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6930Component } from './my-comp-6930.component';

describe('MyComp6930Component', () => {
  let component: MyComp6930Component;
  let fixture: ComponentFixture<MyComp6930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
