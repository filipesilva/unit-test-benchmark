import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1485Component } from './my-comp-1485.component';

describe('MyComp1485Component', () => {
  let component: MyComp1485Component;
  let fixture: ComponentFixture<MyComp1485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
