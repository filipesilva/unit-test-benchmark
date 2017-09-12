import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1387Component } from './my-comp-1387.component';

describe('MyComp1387Component', () => {
  let component: MyComp1387Component;
  let fixture: ComponentFixture<MyComp1387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
