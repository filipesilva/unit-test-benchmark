import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3662Component } from './my-comp-3662.component';

describe('MyComp3662Component', () => {
  let component: MyComp3662Component;
  let fixture: ComponentFixture<MyComp3662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
