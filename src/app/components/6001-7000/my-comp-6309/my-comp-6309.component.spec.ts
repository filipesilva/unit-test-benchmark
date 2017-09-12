import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6309Component } from './my-comp-6309.component';

describe('MyComp6309Component', () => {
  let component: MyComp6309Component;
  let fixture: ComponentFixture<MyComp6309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
