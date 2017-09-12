import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6007Component } from './my-comp-6007.component';

describe('MyComp6007Component', () => {
  let component: MyComp6007Component;
  let fixture: ComponentFixture<MyComp6007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
