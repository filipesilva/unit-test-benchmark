import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1590Component } from './my-comp-1590.component';

describe('MyComp1590Component', () => {
  let component: MyComp1590Component;
  let fixture: ComponentFixture<MyComp1590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
