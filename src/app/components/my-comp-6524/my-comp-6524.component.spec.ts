import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6524Component } from './my-comp-6524.component';

describe('MyComp6524Component', () => {
  let component: MyComp6524Component;
  let fixture: ComponentFixture<MyComp6524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
