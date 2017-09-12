import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1426Component } from './my-comp-1426.component';

describe('MyComp1426Component', () => {
  let component: MyComp1426Component;
  let fixture: ComponentFixture<MyComp1426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
