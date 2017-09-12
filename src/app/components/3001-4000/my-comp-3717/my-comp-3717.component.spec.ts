import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3717Component } from './my-comp-3717.component';

describe('MyComp3717Component', () => {
  let component: MyComp3717Component;
  let fixture: ComponentFixture<MyComp3717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
