import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7613Component } from './my-comp-7613.component';

describe('MyComp7613Component', () => {
  let component: MyComp7613Component;
  let fixture: ComponentFixture<MyComp7613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
