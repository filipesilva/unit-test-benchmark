import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9524Component } from './my-comp-9524.component';

describe('MyComp9524Component', () => {
  let component: MyComp9524Component;
  let fixture: ComponentFixture<MyComp9524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
