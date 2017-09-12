import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1986Component } from './my-comp-1986.component';

describe('MyComp1986Component', () => {
  let component: MyComp1986Component;
  let fixture: ComponentFixture<MyComp1986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
