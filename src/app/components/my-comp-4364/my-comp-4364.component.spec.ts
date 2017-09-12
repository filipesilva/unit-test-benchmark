import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4364Component } from './my-comp-4364.component';

describe('MyComp4364Component', () => {
  let component: MyComp4364Component;
  let fixture: ComponentFixture<MyComp4364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
