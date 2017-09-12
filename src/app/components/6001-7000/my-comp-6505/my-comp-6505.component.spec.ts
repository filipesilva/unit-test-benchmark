import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6505Component } from './my-comp-6505.component';

describe('MyComp6505Component', () => {
  let component: MyComp6505Component;
  let fixture: ComponentFixture<MyComp6505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
