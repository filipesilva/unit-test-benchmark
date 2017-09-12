import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1802Component } from './my-comp-1802.component';

describe('MyComp1802Component', () => {
  let component: MyComp1802Component;
  let fixture: ComponentFixture<MyComp1802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
