import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1604Component } from './my-comp-1604.component';

describe('MyComp1604Component', () => {
  let component: MyComp1604Component;
  let fixture: ComponentFixture<MyComp1604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
