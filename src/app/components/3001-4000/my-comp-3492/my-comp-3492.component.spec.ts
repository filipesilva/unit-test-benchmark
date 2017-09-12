import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3492Component } from './my-comp-3492.component';

describe('MyComp3492Component', () => {
  let component: MyComp3492Component;
  let fixture: ComponentFixture<MyComp3492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
