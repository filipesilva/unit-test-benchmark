import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9269Component } from './my-comp-9269.component';

describe('MyComp9269Component', () => {
  let component: MyComp9269Component;
  let fixture: ComponentFixture<MyComp9269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
