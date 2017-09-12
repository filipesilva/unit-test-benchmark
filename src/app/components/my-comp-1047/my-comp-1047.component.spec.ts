import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1047Component } from './my-comp-1047.component';

describe('MyComp1047Component', () => {
  let component: MyComp1047Component;
  let fixture: ComponentFixture<MyComp1047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
