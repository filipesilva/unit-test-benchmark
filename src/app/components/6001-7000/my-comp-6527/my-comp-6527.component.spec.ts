import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6527Component } from './my-comp-6527.component';

describe('MyComp6527Component', () => {
  let component: MyComp6527Component;
  let fixture: ComponentFixture<MyComp6527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
