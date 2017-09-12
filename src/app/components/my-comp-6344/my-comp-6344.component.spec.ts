import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6344Component } from './my-comp-6344.component';

describe('MyComp6344Component', () => {
  let component: MyComp6344Component;
  let fixture: ComponentFixture<MyComp6344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
