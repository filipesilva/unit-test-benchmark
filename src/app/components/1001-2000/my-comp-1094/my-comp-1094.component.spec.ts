import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1094Component } from './my-comp-1094.component';

describe('MyComp1094Component', () => {
  let component: MyComp1094Component;
  let fixture: ComponentFixture<MyComp1094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
