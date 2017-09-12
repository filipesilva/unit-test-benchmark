import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3973Component } from './my-comp-3973.component';

describe('MyComp3973Component', () => {
  let component: MyComp3973Component;
  let fixture: ComponentFixture<MyComp3973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
