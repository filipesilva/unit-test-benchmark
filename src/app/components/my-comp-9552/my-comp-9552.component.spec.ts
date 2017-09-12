import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9552Component } from './my-comp-9552.component';

describe('MyComp9552Component', () => {
  let component: MyComp9552Component;
  let fixture: ComponentFixture<MyComp9552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
