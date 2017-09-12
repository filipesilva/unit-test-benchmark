import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9663Component } from './my-comp-9663.component';

describe('MyComp9663Component', () => {
  let component: MyComp9663Component;
  let fixture: ComponentFixture<MyComp9663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
