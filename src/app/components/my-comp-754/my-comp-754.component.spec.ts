import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp754Component } from './my-comp-754.component';

describe('MyComp754Component', () => {
  let component: MyComp754Component;
  let fixture: ComponentFixture<MyComp754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
