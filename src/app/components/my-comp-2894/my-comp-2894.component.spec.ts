import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2894Component } from './my-comp-2894.component';

describe('MyComp2894Component', () => {
  let component: MyComp2894Component;
  let fixture: ComponentFixture<MyComp2894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
