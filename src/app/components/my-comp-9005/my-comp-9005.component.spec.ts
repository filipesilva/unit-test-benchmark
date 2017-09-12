import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9005Component } from './my-comp-9005.component';

describe('MyComp9005Component', () => {
  let component: MyComp9005Component;
  let fixture: ComponentFixture<MyComp9005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
