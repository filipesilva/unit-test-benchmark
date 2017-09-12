import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1457Component } from './my-comp-1457.component';

describe('MyComp1457Component', () => {
  let component: MyComp1457Component;
  let fixture: ComponentFixture<MyComp1457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
