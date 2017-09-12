import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1611Component } from './my-comp-1611.component';

describe('MyComp1611Component', () => {
  let component: MyComp1611Component;
  let fixture: ComponentFixture<MyComp1611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
