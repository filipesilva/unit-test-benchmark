import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6943Component } from './my-comp-6943.component';

describe('MyComp6943Component', () => {
  let component: MyComp6943Component;
  let fixture: ComponentFixture<MyComp6943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
