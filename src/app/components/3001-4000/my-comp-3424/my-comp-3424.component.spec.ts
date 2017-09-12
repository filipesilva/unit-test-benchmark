import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3424Component } from './my-comp-3424.component';

describe('MyComp3424Component', () => {
  let component: MyComp3424Component;
  let fixture: ComponentFixture<MyComp3424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
