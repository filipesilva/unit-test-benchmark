import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1583Component } from './my-comp-1583.component';

describe('MyComp1583Component', () => {
  let component: MyComp1583Component;
  let fixture: ComponentFixture<MyComp1583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
