import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1783Component } from './my-comp-1783.component';

describe('MyComp1783Component', () => {
  let component: MyComp1783Component;
  let fixture: ComponentFixture<MyComp1783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
