import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9771Component } from './my-comp-9771.component';

describe('MyComp9771Component', () => {
  let component: MyComp9771Component;
  let fixture: ComponentFixture<MyComp9771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
