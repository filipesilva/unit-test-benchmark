import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1731Component } from './my-comp-1731.component';

describe('MyComp1731Component', () => {
  let component: MyComp1731Component;
  let fixture: ComponentFixture<MyComp1731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
