import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9883Component } from './my-comp-9883.component';

describe('MyComp9883Component', () => {
  let component: MyComp9883Component;
  let fixture: ComponentFixture<MyComp9883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
