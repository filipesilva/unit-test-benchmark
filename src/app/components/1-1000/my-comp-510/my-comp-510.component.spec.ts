import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp510Component } from './my-comp-510.component';

describe('MyComp510Component', () => {
  let component: MyComp510Component;
  let fixture: ComponentFixture<MyComp510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
