import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2356Component } from './my-comp-2356.component';

describe('MyComp2356Component', () => {
  let component: MyComp2356Component;
  let fixture: ComponentFixture<MyComp2356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
