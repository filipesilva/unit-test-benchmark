import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6455Component } from './my-comp-6455.component';

describe('MyComp6455Component', () => {
  let component: MyComp6455Component;
  let fixture: ComponentFixture<MyComp6455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
