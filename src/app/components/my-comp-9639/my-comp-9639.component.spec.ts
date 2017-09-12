import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9639Component } from './my-comp-9639.component';

describe('MyComp9639Component', () => {
  let component: MyComp9639Component;
  let fixture: ComponentFixture<MyComp9639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
