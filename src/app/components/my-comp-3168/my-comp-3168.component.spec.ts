import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3168Component } from './my-comp-3168.component';

describe('MyComp3168Component', () => {
  let component: MyComp3168Component;
  let fixture: ComponentFixture<MyComp3168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
