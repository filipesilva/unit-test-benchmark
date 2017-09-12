import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2309Component } from './my-comp-2309.component';

describe('MyComp2309Component', () => {
  let component: MyComp2309Component;
  let fixture: ComponentFixture<MyComp2309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
