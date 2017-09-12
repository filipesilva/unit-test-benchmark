import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7382Component } from './my-comp-7382.component';

describe('MyComp7382Component', () => {
  let component: MyComp7382Component;
  let fixture: ComponentFixture<MyComp7382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
