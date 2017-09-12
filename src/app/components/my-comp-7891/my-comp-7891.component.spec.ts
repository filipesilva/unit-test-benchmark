import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7891Component } from './my-comp-7891.component';

describe('MyComp7891Component', () => {
  let component: MyComp7891Component;
  let fixture: ComponentFixture<MyComp7891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
