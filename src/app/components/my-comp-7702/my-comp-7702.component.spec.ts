import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7702Component } from './my-comp-7702.component';

describe('MyComp7702Component', () => {
  let component: MyComp7702Component;
  let fixture: ComponentFixture<MyComp7702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
