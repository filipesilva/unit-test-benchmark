import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6004Component } from './my-comp-6004.component';

describe('MyComp6004Component', () => {
  let component: MyComp6004Component;
  let fixture: ComponentFixture<MyComp6004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
