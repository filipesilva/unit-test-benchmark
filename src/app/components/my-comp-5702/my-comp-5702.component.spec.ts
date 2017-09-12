import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5702Component } from './my-comp-5702.component';

describe('MyComp5702Component', () => {
  let component: MyComp5702Component;
  let fixture: ComponentFixture<MyComp5702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
