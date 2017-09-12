import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9277Component } from './my-comp-9277.component';

describe('MyComp9277Component', () => {
  let component: MyComp9277Component;
  let fixture: ComponentFixture<MyComp9277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
