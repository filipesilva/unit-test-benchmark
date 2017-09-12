import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp309Component } from './my-comp-309.component';

describe('MyComp309Component', () => {
  let component: MyComp309Component;
  let fixture: ComponentFixture<MyComp309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
