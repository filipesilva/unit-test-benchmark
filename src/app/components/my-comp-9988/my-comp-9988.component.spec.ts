import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9988Component } from './my-comp-9988.component';

describe('MyComp9988Component', () => {
  let component: MyComp9988Component;
  let fixture: ComponentFixture<MyComp9988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
