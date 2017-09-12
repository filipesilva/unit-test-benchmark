import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp702Component } from './my-comp-702.component';

describe('MyComp702Component', () => {
  let component: MyComp702Component;
  let fixture: ComponentFixture<MyComp702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
