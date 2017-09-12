import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1205Component } from './my-comp-1205.component';

describe('MyComp1205Component', () => {
  let component: MyComp1205Component;
  let fixture: ComponentFixture<MyComp1205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
