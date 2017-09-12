import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1767Component } from './my-comp-1767.component';

describe('MyComp1767Component', () => {
  let component: MyComp1767Component;
  let fixture: ComponentFixture<MyComp1767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
