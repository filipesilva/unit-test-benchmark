import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9144Component } from './my-comp-9144.component';

describe('MyComp9144Component', () => {
  let component: MyComp9144Component;
  let fixture: ComponentFixture<MyComp9144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
