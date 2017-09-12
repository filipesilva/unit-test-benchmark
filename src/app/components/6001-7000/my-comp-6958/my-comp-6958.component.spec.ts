import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6958Component } from './my-comp-6958.component';

describe('MyComp6958Component', () => {
  let component: MyComp6958Component;
  let fixture: ComponentFixture<MyComp6958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
