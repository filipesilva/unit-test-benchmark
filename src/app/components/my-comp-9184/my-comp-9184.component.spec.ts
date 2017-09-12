import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9184Component } from './my-comp-9184.component';

describe('MyComp9184Component', () => {
  let component: MyComp9184Component;
  let fixture: ComponentFixture<MyComp9184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
