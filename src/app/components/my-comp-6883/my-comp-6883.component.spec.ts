import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6883Component } from './my-comp-6883.component';

describe('MyComp6883Component', () => {
  let component: MyComp6883Component;
  let fixture: ComponentFixture<MyComp6883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
