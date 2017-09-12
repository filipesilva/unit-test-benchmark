import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1302Component } from './my-comp-1302.component';

describe('MyComp1302Component', () => {
  let component: MyComp1302Component;
  let fixture: ComponentFixture<MyComp1302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
