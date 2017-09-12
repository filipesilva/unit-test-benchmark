import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9607Component } from './my-comp-9607.component';

describe('MyComp9607Component', () => {
  let component: MyComp9607Component;
  let fixture: ComponentFixture<MyComp9607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
