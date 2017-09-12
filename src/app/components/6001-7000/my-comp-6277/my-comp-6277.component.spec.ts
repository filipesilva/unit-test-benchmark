import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6277Component } from './my-comp-6277.component';

describe('MyComp6277Component', () => {
  let component: MyComp6277Component;
  let fixture: ComponentFixture<MyComp6277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
