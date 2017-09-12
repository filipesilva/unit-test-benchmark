import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp661Component } from './my-comp-661.component';

describe('MyComp661Component', () => {
  let component: MyComp661Component;
  let fixture: ComponentFixture<MyComp661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
