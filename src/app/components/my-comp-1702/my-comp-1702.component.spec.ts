import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1702Component } from './my-comp-1702.component';

describe('MyComp1702Component', () => {
  let component: MyComp1702Component;
  let fixture: ComponentFixture<MyComp1702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
