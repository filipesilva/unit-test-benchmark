import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9736Component } from './my-comp-9736.component';

describe('MyComp9736Component', () => {
  let component: MyComp9736Component;
  let fixture: ComponentFixture<MyComp9736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
