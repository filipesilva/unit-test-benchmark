import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3659Component } from './my-comp-3659.component';

describe('MyComp3659Component', () => {
  let component: MyComp3659Component;
  let fixture: ComponentFixture<MyComp3659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
