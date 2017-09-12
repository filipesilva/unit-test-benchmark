import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7968Component } from './my-comp-7968.component';

describe('MyComp7968Component', () => {
  let component: MyComp7968Component;
  let fixture: ComponentFixture<MyComp7968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
