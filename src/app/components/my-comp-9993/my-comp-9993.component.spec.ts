import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9993Component } from './my-comp-9993.component';

describe('MyComp9993Component', () => {
  let component: MyComp9993Component;
  let fixture: ComponentFixture<MyComp9993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
