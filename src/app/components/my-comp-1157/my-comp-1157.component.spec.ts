import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1157Component } from './my-comp-1157.component';

describe('MyComp1157Component', () => {
  let component: MyComp1157Component;
  let fixture: ComponentFixture<MyComp1157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
