import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1599Component } from './my-comp-1599.component';

describe('MyComp1599Component', () => {
  let component: MyComp1599Component;
  let fixture: ComponentFixture<MyComp1599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
