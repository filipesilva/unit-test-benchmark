import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7532Component } from './my-comp-7532.component';

describe('MyComp7532Component', () => {
  let component: MyComp7532Component;
  let fixture: ComponentFixture<MyComp7532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
