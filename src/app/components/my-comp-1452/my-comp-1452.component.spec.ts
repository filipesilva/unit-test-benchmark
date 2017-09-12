import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1452Component } from './my-comp-1452.component';

describe('MyComp1452Component', () => {
  let component: MyComp1452Component;
  let fixture: ComponentFixture<MyComp1452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
