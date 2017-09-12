import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1084Component } from './my-comp-1084.component';

describe('MyComp1084Component', () => {
  let component: MyComp1084Component;
  let fixture: ComponentFixture<MyComp1084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
