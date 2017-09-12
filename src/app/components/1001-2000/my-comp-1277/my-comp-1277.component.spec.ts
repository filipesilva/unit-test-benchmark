import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1277Component } from './my-comp-1277.component';

describe('MyComp1277Component', () => {
  let component: MyComp1277Component;
  let fixture: ComponentFixture<MyComp1277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
