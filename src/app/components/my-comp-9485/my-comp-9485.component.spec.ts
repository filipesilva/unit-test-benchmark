import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9485Component } from './my-comp-9485.component';

describe('MyComp9485Component', () => {
  let component: MyComp9485Component;
  let fixture: ComponentFixture<MyComp9485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
