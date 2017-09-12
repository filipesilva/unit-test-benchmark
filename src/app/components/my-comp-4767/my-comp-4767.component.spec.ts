import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4767Component } from './my-comp-4767.component';

describe('MyComp4767Component', () => {
  let component: MyComp4767Component;
  let fixture: ComponentFixture<MyComp4767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
