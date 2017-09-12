import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1602Component } from './my-comp-1602.component';

describe('MyComp1602Component', () => {
  let component: MyComp1602Component;
  let fixture: ComponentFixture<MyComp1602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
