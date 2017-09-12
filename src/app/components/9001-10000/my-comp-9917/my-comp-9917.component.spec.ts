import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9917Component } from './my-comp-9917.component';

describe('MyComp9917Component', () => {
  let component: MyComp9917Component;
  let fixture: ComponentFixture<MyComp9917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
