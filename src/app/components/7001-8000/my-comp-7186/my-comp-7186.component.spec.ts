import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7186Component } from './my-comp-7186.component';

describe('MyComp7186Component', () => {
  let component: MyComp7186Component;
  let fixture: ComponentFixture<MyComp7186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
