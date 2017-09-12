import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9306Component } from './my-comp-9306.component';

describe('MyComp9306Component', () => {
  let component: MyComp9306Component;
  let fixture: ComponentFixture<MyComp9306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
