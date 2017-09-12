import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3086Component } from './my-comp-3086.component';

describe('MyComp3086Component', () => {
  let component: MyComp3086Component;
  let fixture: ComponentFixture<MyComp3086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
