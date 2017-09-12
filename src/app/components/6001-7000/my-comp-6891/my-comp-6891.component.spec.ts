import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6891Component } from './my-comp-6891.component';

describe('MyComp6891Component', () => {
  let component: MyComp6891Component;
  let fixture: ComponentFixture<MyComp6891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
