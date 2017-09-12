import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6157Component } from './my-comp-6157.component';

describe('MyComp6157Component', () => {
  let component: MyComp6157Component;
  let fixture: ComponentFixture<MyComp6157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
