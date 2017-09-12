import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6094Component } from './my-comp-6094.component';

describe('MyComp6094Component', () => {
  let component: MyComp6094Component;
  let fixture: ComponentFixture<MyComp6094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
