import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9702Component } from './my-comp-9702.component';

describe('MyComp9702Component', () => {
  let component: MyComp9702Component;
  let fixture: ComponentFixture<MyComp9702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
