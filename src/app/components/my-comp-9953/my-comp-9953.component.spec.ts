import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9953Component } from './my-comp-9953.component';

describe('MyComp9953Component', () => {
  let component: MyComp9953Component;
  let fixture: ComponentFixture<MyComp9953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
