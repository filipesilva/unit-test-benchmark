import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp143Component } from './my-comp-143.component';

describe('MyComp143Component', () => {
  let component: MyComp143Component;
  let fixture: ComponentFixture<MyComp143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
