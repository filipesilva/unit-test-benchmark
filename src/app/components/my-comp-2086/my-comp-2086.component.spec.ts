import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2086Component } from './my-comp-2086.component';

describe('MyComp2086Component', () => {
  let component: MyComp2086Component;
  let fixture: ComponentFixture<MyComp2086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
