import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6702Component } from './my-comp-6702.component';

describe('MyComp6702Component', () => {
  let component: MyComp6702Component;
  let fixture: ComponentFixture<MyComp6702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
