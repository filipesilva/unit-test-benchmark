import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8309Component } from './my-comp-8309.component';

describe('MyComp8309Component', () => {
  let component: MyComp8309Component;
  let fixture: ComponentFixture<MyComp8309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
