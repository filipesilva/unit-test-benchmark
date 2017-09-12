import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9778Component } from './my-comp-9778.component';

describe('MyComp9778Component', () => {
  let component: MyComp9778Component;
  let fixture: ComponentFixture<MyComp9778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
