import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9853Component } from './my-comp-9853.component';

describe('MyComp9853Component', () => {
  let component: MyComp9853Component;
  let fixture: ComponentFixture<MyComp9853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
