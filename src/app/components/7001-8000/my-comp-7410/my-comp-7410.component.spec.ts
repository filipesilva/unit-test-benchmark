import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7410Component } from './my-comp-7410.component';

describe('MyComp7410Component', () => {
  let component: MyComp7410Component;
  let fixture: ComponentFixture<MyComp7410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
