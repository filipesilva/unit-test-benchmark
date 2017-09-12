import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1420Component } from './my-comp-1420.component';

describe('MyComp1420Component', () => {
  let component: MyComp1420Component;
  let fixture: ComponentFixture<MyComp1420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
