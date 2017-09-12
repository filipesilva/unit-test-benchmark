import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9427Component } from './my-comp-9427.component';

describe('MyComp9427Component', () => {
  let component: MyComp9427Component;
  let fixture: ComponentFixture<MyComp9427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
