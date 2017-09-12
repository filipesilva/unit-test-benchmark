import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp105Component } from './my-comp-105.component';

describe('MyComp105Component', () => {
  let component: MyComp105Component;
  let fixture: ComponentFixture<MyComp105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
