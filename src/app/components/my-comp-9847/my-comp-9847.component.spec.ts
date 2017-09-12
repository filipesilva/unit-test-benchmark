import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9847Component } from './my-comp-9847.component';

describe('MyComp9847Component', () => {
  let component: MyComp9847Component;
  let fixture: ComponentFixture<MyComp9847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
