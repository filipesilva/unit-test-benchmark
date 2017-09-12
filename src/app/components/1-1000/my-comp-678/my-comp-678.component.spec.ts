import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp678Component } from './my-comp-678.component';

describe('MyComp678Component', () => {
  let component: MyComp678Component;
  let fixture: ComponentFixture<MyComp678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
