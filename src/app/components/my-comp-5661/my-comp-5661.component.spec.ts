import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5661Component } from './my-comp-5661.component';

describe('MyComp5661Component', () => {
  let component: MyComp5661Component;
  let fixture: ComponentFixture<MyComp5661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
