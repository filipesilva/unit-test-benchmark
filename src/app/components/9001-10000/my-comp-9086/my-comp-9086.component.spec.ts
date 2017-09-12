import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9086Component } from './my-comp-9086.component';

describe('MyComp9086Component', () => {
  let component: MyComp9086Component;
  let fixture: ComponentFixture<MyComp9086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
