import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9776Component } from './my-comp-9776.component';

describe('MyComp9776Component', () => {
  let component: MyComp9776Component;
  let fixture: ComponentFixture<MyComp9776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
