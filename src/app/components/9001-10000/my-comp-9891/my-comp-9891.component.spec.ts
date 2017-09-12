import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9891Component } from './my-comp-9891.component';

describe('MyComp9891Component', () => {
  let component: MyComp9891Component;
  let fixture: ComponentFixture<MyComp9891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
