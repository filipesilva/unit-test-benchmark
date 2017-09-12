import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9636Component } from './my-comp-9636.component';

describe('MyComp9636Component', () => {
  let component: MyComp9636Component;
  let fixture: ComponentFixture<MyComp9636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
