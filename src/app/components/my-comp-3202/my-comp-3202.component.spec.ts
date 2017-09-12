import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3202Component } from './my-comp-3202.component';

describe('MyComp3202Component', () => {
  let component: MyComp3202Component;
  let fixture: ComponentFixture<MyComp3202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
