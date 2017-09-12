import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7623Component } from './my-comp-7623.component';

describe('MyComp7623Component', () => {
  let component: MyComp7623Component;
  let fixture: ComponentFixture<MyComp7623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
