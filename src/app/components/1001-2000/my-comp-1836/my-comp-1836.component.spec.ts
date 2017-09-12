import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1836Component } from './my-comp-1836.component';

describe('MyComp1836Component', () => {
  let component: MyComp1836Component;
  let fixture: ComponentFixture<MyComp1836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
