import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1393Component } from './my-comp-1393.component';

describe('MyComp1393Component', () => {
  let component: MyComp1393Component;
  let fixture: ComponentFixture<MyComp1393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
