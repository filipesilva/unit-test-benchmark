import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5379Component } from './my-comp-5379.component';

describe('MyComp5379Component', () => {
  let component: MyComp5379Component;
  let fixture: ComponentFixture<MyComp5379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
