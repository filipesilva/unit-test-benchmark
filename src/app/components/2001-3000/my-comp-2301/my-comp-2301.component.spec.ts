import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2301Component } from './my-comp-2301.component';

describe('MyComp2301Component', () => {
  let component: MyComp2301Component;
  let fixture: ComponentFixture<MyComp2301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
