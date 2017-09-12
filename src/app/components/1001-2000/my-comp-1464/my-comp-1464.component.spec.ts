import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1464Component } from './my-comp-1464.component';

describe('MyComp1464Component', () => {
  let component: MyComp1464Component;
  let fixture: ComponentFixture<MyComp1464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
