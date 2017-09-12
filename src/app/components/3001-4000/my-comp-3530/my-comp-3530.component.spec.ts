import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3530Component } from './my-comp-3530.component';

describe('MyComp3530Component', () => {
  let component: MyComp3530Component;
  let fixture: ComponentFixture<MyComp3530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
