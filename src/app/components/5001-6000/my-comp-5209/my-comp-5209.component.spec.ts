import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5209Component } from './my-comp-5209.component';

describe('MyComp5209Component', () => {
  let component: MyComp5209Component;
  let fixture: ComponentFixture<MyComp5209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
