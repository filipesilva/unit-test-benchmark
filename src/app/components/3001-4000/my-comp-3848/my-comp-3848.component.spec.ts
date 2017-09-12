import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3848Component } from './my-comp-3848.component';

describe('MyComp3848Component', () => {
  let component: MyComp3848Component;
  let fixture: ComponentFixture<MyComp3848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
