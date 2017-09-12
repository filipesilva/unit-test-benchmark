import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9408Component } from './my-comp-9408.component';

describe('MyComp9408Component', () => {
  let component: MyComp9408Component;
  let fixture: ComponentFixture<MyComp9408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
