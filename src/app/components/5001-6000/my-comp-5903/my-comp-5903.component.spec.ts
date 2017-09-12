import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5903Component } from './my-comp-5903.component';

describe('MyComp5903Component', () => {
  let component: MyComp5903Component;
  let fixture: ComponentFixture<MyComp5903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
