import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3103Component } from './my-comp-3103.component';

describe('MyComp3103Component', () => {
  let component: MyComp3103Component;
  let fixture: ComponentFixture<MyComp3103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
