import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9097Component } from './my-comp-9097.component';

describe('MyComp9097Component', () => {
  let component: MyComp9097Component;
  let fixture: ComponentFixture<MyComp9097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
