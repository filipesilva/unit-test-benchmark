import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9759Component } from './my-comp-9759.component';

describe('MyComp9759Component', () => {
  let component: MyComp9759Component;
  let fixture: ComponentFixture<MyComp9759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
