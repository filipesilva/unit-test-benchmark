import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2702Component } from './my-comp-2702.component';

describe('MyComp2702Component', () => {
  let component: MyComp2702Component;
  let fixture: ComponentFixture<MyComp2702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
