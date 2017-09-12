import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9004Component } from './my-comp-9004.component';

describe('MyComp9004Component', () => {
  let component: MyComp9004Component;
  let fixture: ComponentFixture<MyComp9004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
