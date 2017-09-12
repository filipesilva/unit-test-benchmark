import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9943Component } from './my-comp-9943.component';

describe('MyComp9943Component', () => {
  let component: MyComp9943Component;
  let fixture: ComponentFixture<MyComp9943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
