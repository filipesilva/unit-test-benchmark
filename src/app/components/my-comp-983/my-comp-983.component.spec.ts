import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp983Component } from './my-comp-983.component';

describe('MyComp983Component', () => {
  let component: MyComp983Component;
  let fixture: ComponentFixture<MyComp983Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp983Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
