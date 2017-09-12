import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7509Component } from './my-comp-7509.component';

describe('MyComp7509Component', () => {
  let component: MyComp7509Component;
  let fixture: ComponentFixture<MyComp7509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
