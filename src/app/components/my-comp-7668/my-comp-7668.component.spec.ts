import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7668Component } from './my-comp-7668.component';

describe('MyComp7668Component', () => {
  let component: MyComp7668Component;
  let fixture: ComponentFixture<MyComp7668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
