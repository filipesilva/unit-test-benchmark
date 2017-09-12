import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1089Component } from './my-comp-1089.component';

describe('MyComp1089Component', () => {
  let component: MyComp1089Component;
  let fixture: ComponentFixture<MyComp1089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
