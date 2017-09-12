import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3379Component } from './my-comp-3379.component';

describe('MyComp3379Component', () => {
  let component: MyComp3379Component;
  let fixture: ComponentFixture<MyComp3379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
