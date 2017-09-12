import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9909Component } from './my-comp-9909.component';

describe('MyComp9909Component', () => {
  let component: MyComp9909Component;
  let fixture: ComponentFixture<MyComp9909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
