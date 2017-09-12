import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3454Component } from './my-comp-3454.component';

describe('MyComp3454Component', () => {
  let component: MyComp3454Component;
  let fixture: ComponentFixture<MyComp3454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
