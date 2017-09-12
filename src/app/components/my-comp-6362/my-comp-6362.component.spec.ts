import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6362Component } from './my-comp-6362.component';

describe('MyComp6362Component', () => {
  let component: MyComp6362Component;
  let fixture: ComponentFixture<MyComp6362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
