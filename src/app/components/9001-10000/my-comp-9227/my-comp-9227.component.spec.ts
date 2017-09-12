import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9227Component } from './my-comp-9227.component';

describe('MyComp9227Component', () => {
  let component: MyComp9227Component;
  let fixture: ComponentFixture<MyComp9227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
