import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7230Component } from './my-comp-7230.component';

describe('MyComp7230Component', () => {
  let component: MyComp7230Component;
  let fixture: ComponentFixture<MyComp7230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
