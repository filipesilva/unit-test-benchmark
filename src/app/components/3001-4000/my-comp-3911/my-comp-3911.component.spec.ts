import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3911Component } from './my-comp-3911.component';

describe('MyComp3911Component', () => {
  let component: MyComp3911Component;
  let fixture: ComponentFixture<MyComp3911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
