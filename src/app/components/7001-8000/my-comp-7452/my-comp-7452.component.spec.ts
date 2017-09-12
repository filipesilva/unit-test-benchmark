import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7452Component } from './my-comp-7452.component';

describe('MyComp7452Component', () => {
  let component: MyComp7452Component;
  let fixture: ComponentFixture<MyComp7452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
