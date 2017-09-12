import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9986Component } from './my-comp-9986.component';

describe('MyComp9986Component', () => {
  let component: MyComp9986Component;
  let fixture: ComponentFixture<MyComp9986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
