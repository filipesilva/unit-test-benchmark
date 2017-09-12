import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6070Component } from './my-comp-6070.component';

describe('MyComp6070Component', () => {
  let component: MyComp6070Component;
  let fixture: ComponentFixture<MyComp6070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
