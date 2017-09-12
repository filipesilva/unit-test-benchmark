import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2657Component } from './my-comp-2657.component';

describe('MyComp2657Component', () => {
  let component: MyComp2657Component;
  let fixture: ComponentFixture<MyComp2657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
