import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9259Component } from './my-comp-9259.component';

describe('MyComp9259Component', () => {
  let component: MyComp9259Component;
  let fixture: ComponentFixture<MyComp9259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
