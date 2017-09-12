import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1478Component } from './my-comp-1478.component';

describe('MyComp1478Component', () => {
  let component: MyComp1478Component;
  let fixture: ComponentFixture<MyComp1478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
