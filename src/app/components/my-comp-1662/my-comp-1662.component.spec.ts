import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1662Component } from './my-comp-1662.component';

describe('MyComp1662Component', () => {
  let component: MyComp1662Component;
  let fixture: ComponentFixture<MyComp1662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
