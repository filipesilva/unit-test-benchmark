import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4882Component } from './my-comp-4882.component';

describe('MyComp4882Component', () => {
  let component: MyComp4882Component;
  let fixture: ComponentFixture<MyComp4882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
