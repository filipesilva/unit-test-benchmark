import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6626Component } from './my-comp-6626.component';

describe('MyComp6626Component', () => {
  let component: MyComp6626Component;
  let fixture: ComponentFixture<MyComp6626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
