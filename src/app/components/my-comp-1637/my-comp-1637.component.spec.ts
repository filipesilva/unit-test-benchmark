import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1637Component } from './my-comp-1637.component';

describe('MyComp1637Component', () => {
  let component: MyComp1637Component;
  let fixture: ComponentFixture<MyComp1637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
