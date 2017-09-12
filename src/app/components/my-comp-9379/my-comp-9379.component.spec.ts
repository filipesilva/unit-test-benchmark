import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9379Component } from './my-comp-9379.component';

describe('MyComp9379Component', () => {
  let component: MyComp9379Component;
  let fixture: ComponentFixture<MyComp9379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
