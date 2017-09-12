import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3320Component } from './my-comp-3320.component';

describe('MyComp3320Component', () => {
  let component: MyComp3320Component;
  let fixture: ComponentFixture<MyComp3320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
