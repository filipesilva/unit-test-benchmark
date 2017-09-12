import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9881Component } from './my-comp-9881.component';

describe('MyComp9881Component', () => {
  let component: MyComp9881Component;
  let fixture: ComponentFixture<MyComp9881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
