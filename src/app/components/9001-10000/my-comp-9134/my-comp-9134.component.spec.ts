import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9134Component } from './my-comp-9134.component';

describe('MyComp9134Component', () => {
  let component: MyComp9134Component;
  let fixture: ComponentFixture<MyComp9134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
