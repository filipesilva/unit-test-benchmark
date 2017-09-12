import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2047Component } from './my-comp-2047.component';

describe('MyComp2047Component', () => {
  let component: MyComp2047Component;
  let fixture: ComponentFixture<MyComp2047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
