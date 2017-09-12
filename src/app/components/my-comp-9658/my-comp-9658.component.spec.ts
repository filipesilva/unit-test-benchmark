import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9658Component } from './my-comp-9658.component';

describe('MyComp9658Component', () => {
  let component: MyComp9658Component;
  let fixture: ComponentFixture<MyComp9658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
