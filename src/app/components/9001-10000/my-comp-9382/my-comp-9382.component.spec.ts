import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9382Component } from './my-comp-9382.component';

describe('MyComp9382Component', () => {
  let component: MyComp9382Component;
  let fixture: ComponentFixture<MyComp9382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
