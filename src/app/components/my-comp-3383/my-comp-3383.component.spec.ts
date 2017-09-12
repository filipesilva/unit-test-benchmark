import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3383Component } from './my-comp-3383.component';

describe('MyComp3383Component', () => {
  let component: MyComp3383Component;
  let fixture: ComponentFixture<MyComp3383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
