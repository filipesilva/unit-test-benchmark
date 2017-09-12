import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1476Component } from './my-comp-1476.component';

describe('MyComp1476Component', () => {
  let component: MyComp1476Component;
  let fixture: ComponentFixture<MyComp1476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
