import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1309Component } from './my-comp-1309.component';

describe('MyComp1309Component', () => {
  let component: MyComp1309Component;
  let fixture: ComponentFixture<MyComp1309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
