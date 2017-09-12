import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp151Component } from './my-comp-151.component';

describe('MyComp151Component', () => {
  let component: MyComp151Component;
  let fixture: ComponentFixture<MyComp151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
