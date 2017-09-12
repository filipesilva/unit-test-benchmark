import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1320Component } from './my-comp-1320.component';

describe('MyComp1320Component', () => {
  let component: MyComp1320Component;
  let fixture: ComponentFixture<MyComp1320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
