import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3891Component } from './my-comp-3891.component';

describe('MyComp3891Component', () => {
  let component: MyComp3891Component;
  let fixture: ComponentFixture<MyComp3891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
