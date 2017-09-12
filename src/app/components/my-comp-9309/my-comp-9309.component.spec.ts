import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9309Component } from './my-comp-9309.component';

describe('MyComp9309Component', () => {
  let component: MyComp9309Component;
  let fixture: ComponentFixture<MyComp9309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
