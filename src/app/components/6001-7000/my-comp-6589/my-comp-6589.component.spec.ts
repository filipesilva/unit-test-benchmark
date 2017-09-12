import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6589Component } from './my-comp-6589.component';

describe('MyComp6589Component', () => {
  let component: MyComp6589Component;
  let fixture: ComponentFixture<MyComp6589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
