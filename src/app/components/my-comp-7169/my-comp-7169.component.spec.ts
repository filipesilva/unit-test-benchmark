import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7169Component } from './my-comp-7169.component';

describe('MyComp7169Component', () => {
  let component: MyComp7169Component;
  let fixture: ComponentFixture<MyComp7169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
