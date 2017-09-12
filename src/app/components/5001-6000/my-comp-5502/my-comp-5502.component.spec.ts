import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5502Component } from './my-comp-5502.component';

describe('MyComp5502Component', () => {
  let component: MyComp5502Component;
  let fixture: ComponentFixture<MyComp5502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
