import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1456Component } from './my-comp-1456.component';

describe('MyComp1456Component', () => {
  let component: MyComp1456Component;
  let fixture: ComponentFixture<MyComp1456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
