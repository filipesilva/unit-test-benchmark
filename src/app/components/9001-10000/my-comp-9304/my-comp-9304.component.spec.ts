import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9304Component } from './my-comp-9304.component';

describe('MyComp9304Component', () => {
  let component: MyComp9304Component;
  let fixture: ComponentFixture<MyComp9304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
