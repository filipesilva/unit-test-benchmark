import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9292Component } from './my-comp-9292.component';

describe('MyComp9292Component', () => {
  let component: MyComp9292Component;
  let fixture: ComponentFixture<MyComp9292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
