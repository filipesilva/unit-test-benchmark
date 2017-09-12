import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9749Component } from './my-comp-9749.component';

describe('MyComp9749Component', () => {
  let component: MyComp9749Component;
  let fixture: ComponentFixture<MyComp9749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
