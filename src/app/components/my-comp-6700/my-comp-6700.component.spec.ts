import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6700Component } from './my-comp-6700.component';

describe('MyComp6700Component', () => {
  let component: MyComp6700Component;
  let fixture: ComponentFixture<MyComp6700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
