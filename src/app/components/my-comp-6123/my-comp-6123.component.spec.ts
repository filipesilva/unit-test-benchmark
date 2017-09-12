import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6123Component } from './my-comp-6123.component';

describe('MyComp6123Component', () => {
  let component: MyComp6123Component;
  let fixture: ComponentFixture<MyComp6123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
