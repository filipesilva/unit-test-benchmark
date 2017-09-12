import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9215Component } from './my-comp-9215.component';

describe('MyComp9215Component', () => {
  let component: MyComp9215Component;
  let fixture: ComponentFixture<MyComp9215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
