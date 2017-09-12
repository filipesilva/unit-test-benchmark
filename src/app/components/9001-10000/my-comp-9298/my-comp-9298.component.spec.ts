import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9298Component } from './my-comp-9298.component';

describe('MyComp9298Component', () => {
  let component: MyComp9298Component;
  let fixture: ComponentFixture<MyComp9298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
