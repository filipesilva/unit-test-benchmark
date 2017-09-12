import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3588Component } from './my-comp-3588.component';

describe('MyComp3588Component', () => {
  let component: MyComp3588Component;
  let fixture: ComponentFixture<MyComp3588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
