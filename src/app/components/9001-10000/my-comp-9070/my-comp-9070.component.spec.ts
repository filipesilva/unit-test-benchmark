import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9070Component } from './my-comp-9070.component';

describe('MyComp9070Component', () => {
  let component: MyComp9070Component;
  let fixture: ComponentFixture<MyComp9070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
