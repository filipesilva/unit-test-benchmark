import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1405Component } from './my-comp-1405.component';

describe('MyComp1405Component', () => {
  let component: MyComp1405Component;
  let fixture: ComponentFixture<MyComp1405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
