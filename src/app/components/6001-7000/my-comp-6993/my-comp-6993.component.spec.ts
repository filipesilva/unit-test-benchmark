import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6993Component } from './my-comp-6993.component';

describe('MyComp6993Component', () => {
  let component: MyComp6993Component;
  let fixture: ComponentFixture<MyComp6993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
