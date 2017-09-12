import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4195Component } from './my-comp-4195.component';

describe('MyComp4195Component', () => {
  let component: MyComp4195Component;
  let fixture: ComponentFixture<MyComp4195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
