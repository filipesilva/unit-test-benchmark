import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9226Component } from './my-comp-9226.component';

describe('MyComp9226Component', () => {
  let component: MyComp9226Component;
  let fixture: ComponentFixture<MyComp9226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
