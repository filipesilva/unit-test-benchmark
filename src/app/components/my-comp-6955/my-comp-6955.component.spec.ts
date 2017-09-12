import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6955Component } from './my-comp-6955.component';

describe('MyComp6955Component', () => {
  let component: MyComp6955Component;
  let fixture: ComponentFixture<MyComp6955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
