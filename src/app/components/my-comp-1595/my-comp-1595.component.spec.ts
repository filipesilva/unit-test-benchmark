import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1595Component } from './my-comp-1595.component';

describe('MyComp1595Component', () => {
  let component: MyComp1595Component;
  let fixture: ComponentFixture<MyComp1595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
