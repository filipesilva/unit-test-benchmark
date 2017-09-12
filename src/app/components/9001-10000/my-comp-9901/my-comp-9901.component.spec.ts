import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9901Component } from './my-comp-9901.component';

describe('MyComp9901Component', () => {
  let component: MyComp9901Component;
  let fixture: ComponentFixture<MyComp9901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
