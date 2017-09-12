import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4702Component } from './my-comp-4702.component';

describe('MyComp4702Component', () => {
  let component: MyComp4702Component;
  let fixture: ComponentFixture<MyComp4702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
