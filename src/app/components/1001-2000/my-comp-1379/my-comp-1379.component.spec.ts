import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1379Component } from './my-comp-1379.component';

describe('MyComp1379Component', () => {
  let component: MyComp1379Component;
  let fixture: ComponentFixture<MyComp1379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
