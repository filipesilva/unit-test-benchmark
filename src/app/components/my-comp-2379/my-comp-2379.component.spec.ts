import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2379Component } from './my-comp-2379.component';

describe('MyComp2379Component', () => {
  let component: MyComp2379Component;
  let fixture: ComponentFixture<MyComp2379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
