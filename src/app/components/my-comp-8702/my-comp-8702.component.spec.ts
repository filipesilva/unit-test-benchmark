import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8702Component } from './my-comp-8702.component';

describe('MyComp8702Component', () => {
  let component: MyComp8702Component;
  let fixture: ComponentFixture<MyComp8702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
