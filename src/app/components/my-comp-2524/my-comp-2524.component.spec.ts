import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2524Component } from './my-comp-2524.component';

describe('MyComp2524Component', () => {
  let component: MyComp2524Component;
  let fixture: ComponentFixture<MyComp2524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
