import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1100Component } from './my-comp-1100.component';

describe('MyComp1100Component', () => {
  let component: MyComp1100Component;
  let fixture: ComponentFixture<MyComp1100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
