import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3702Component } from './my-comp-3702.component';

describe('MyComp3702Component', () => {
  let component: MyComp3702Component;
  let fixture: ComponentFixture<MyComp3702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
