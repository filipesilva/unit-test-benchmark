import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2541Component } from './my-comp-2541.component';

describe('MyComp2541Component', () => {
  let component: MyComp2541Component;
  let fixture: ComponentFixture<MyComp2541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
