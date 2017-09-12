import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6215Component } from './my-comp-6215.component';

describe('MyComp6215Component', () => {
  let component: MyComp6215Component;
  let fixture: ComponentFixture<MyComp6215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
