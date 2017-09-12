import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1607Component } from './my-comp-1607.component';

describe('MyComp1607Component', () => {
  let component: MyComp1607Component;
  let fixture: ComponentFixture<MyComp1607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
