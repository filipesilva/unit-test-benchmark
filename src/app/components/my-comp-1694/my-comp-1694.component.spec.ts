import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1694Component } from './my-comp-1694.component';

describe('MyComp1694Component', () => {
  let component: MyComp1694Component;
  let fixture: ComponentFixture<MyComp1694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
