import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1744Component } from './my-comp-1744.component';

describe('MyComp1744Component', () => {
  let component: MyComp1744Component;
  let fixture: ComponentFixture<MyComp1744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
