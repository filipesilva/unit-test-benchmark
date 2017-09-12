import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7174Component } from './my-comp-7174.component';

describe('MyComp7174Component', () => {
  let component: MyComp7174Component;
  let fixture: ComponentFixture<MyComp7174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
