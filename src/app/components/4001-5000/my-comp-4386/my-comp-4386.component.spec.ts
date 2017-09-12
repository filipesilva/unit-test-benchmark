import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4386Component } from './my-comp-4386.component';

describe('MyComp4386Component', () => {
  let component: MyComp4386Component;
  let fixture: ComponentFixture<MyComp4386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
