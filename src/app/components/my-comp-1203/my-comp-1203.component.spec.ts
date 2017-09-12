import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1203Component } from './my-comp-1203.component';

describe('MyComp1203Component', () => {
  let component: MyComp1203Component;
  let fixture: ComponentFixture<MyComp1203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
