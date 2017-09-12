import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1699Component } from './my-comp-1699.component';

describe('MyComp1699Component', () => {
  let component: MyComp1699Component;
  let fixture: ComponentFixture<MyComp1699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
