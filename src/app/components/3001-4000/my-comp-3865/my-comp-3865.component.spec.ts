import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3865Component } from './my-comp-3865.component';

describe('MyComp3865Component', () => {
  let component: MyComp3865Component;
  let fixture: ComponentFixture<MyComp3865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
