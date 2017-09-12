import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2544Component } from './my-comp-2544.component';

describe('MyComp2544Component', () => {
  let component: MyComp2544Component;
  let fixture: ComponentFixture<MyComp2544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
