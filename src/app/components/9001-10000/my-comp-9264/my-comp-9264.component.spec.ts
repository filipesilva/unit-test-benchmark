import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9264Component } from './my-comp-9264.component';

describe('MyComp9264Component', () => {
  let component: MyComp9264Component;
  let fixture: ComponentFixture<MyComp9264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
