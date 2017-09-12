import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3416Component } from './my-comp-3416.component';

describe('MyComp3416Component', () => {
  let component: MyComp3416Component;
  let fixture: ComponentFixture<MyComp3416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
