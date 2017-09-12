import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7292Component } from './my-comp-7292.component';

describe('MyComp7292Component', () => {
  let component: MyComp7292Component;
  let fixture: ComponentFixture<MyComp7292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
