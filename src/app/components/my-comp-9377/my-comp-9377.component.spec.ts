import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9377Component } from './my-comp-9377.component';

describe('MyComp9377Component', () => {
  let component: MyComp9377Component;
  let fixture: ComponentFixture<MyComp9377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
