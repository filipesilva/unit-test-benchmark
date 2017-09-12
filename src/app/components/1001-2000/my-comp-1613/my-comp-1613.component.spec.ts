import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1613Component } from './my-comp-1613.component';

describe('MyComp1613Component', () => {
  let component: MyComp1613Component;
  let fixture: ComponentFixture<MyComp1613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
