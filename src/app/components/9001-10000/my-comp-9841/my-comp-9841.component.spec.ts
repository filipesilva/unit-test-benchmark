import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9841Component } from './my-comp-9841.component';

describe('MyComp9841Component', () => {
  let component: MyComp9841Component;
  let fixture: ComponentFixture<MyComp9841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
