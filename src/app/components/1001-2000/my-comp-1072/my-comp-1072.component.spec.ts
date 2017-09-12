import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1072Component } from './my-comp-1072.component';

describe('MyComp1072Component', () => {
  let component: MyComp1072Component;
  let fixture: ComponentFixture<MyComp1072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
