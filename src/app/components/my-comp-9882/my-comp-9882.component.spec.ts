import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9882Component } from './my-comp-9882.component';

describe('MyComp9882Component', () => {
  let component: MyComp9882Component;
  let fixture: ComponentFixture<MyComp9882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
