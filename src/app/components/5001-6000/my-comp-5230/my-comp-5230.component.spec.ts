import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5230Component } from './my-comp-5230.component';

describe('MyComp5230Component', () => {
  let component: MyComp5230Component;
  let fixture: ComponentFixture<MyComp5230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
