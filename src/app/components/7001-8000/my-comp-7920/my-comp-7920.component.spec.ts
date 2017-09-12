import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7920Component } from './my-comp-7920.component';

describe('MyComp7920Component', () => {
  let component: MyComp7920Component;
  let fixture: ComponentFixture<MyComp7920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
