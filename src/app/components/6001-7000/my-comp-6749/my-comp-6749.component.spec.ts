import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6749Component } from './my-comp-6749.component';

describe('MyComp6749Component', () => {
  let component: MyComp6749Component;
  let fixture: ComponentFixture<MyComp6749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
