import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7777Component } from './my-comp-7777.component';

describe('MyComp7777Component', () => {
  let component: MyComp7777Component;
  let fixture: ComponentFixture<MyComp7777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
