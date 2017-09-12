import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6222Component } from './my-comp-6222.component';

describe('MyComp6222Component', () => {
  let component: MyComp6222Component;
  let fixture: ComponentFixture<MyComp6222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
