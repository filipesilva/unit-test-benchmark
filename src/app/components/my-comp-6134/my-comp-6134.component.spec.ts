import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6134Component } from './my-comp-6134.component';

describe('MyComp6134Component', () => {
  let component: MyComp6134Component;
  let fixture: ComponentFixture<MyComp6134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
