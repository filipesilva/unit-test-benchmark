import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9237Component } from './my-comp-9237.component';

describe('MyComp9237Component', () => {
  let component: MyComp9237Component;
  let fixture: ComponentFixture<MyComp9237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
