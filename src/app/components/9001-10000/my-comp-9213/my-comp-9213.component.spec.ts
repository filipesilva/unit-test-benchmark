import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9213Component } from './my-comp-9213.component';

describe('MyComp9213Component', () => {
  let component: MyComp9213Component;
  let fixture: ComponentFixture<MyComp9213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
