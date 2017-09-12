import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9320Component } from './my-comp-9320.component';

describe('MyComp9320Component', () => {
  let component: MyComp9320Component;
  let fixture: ComponentFixture<MyComp9320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
