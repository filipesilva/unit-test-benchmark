import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1510Component } from './my-comp-1510.component';

describe('MyComp1510Component', () => {
  let component: MyComp1510Component;
  let fixture: ComponentFixture<MyComp1510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
