import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1787Component } from './my-comp-1787.component';

describe('MyComp1787Component', () => {
  let component: MyComp1787Component;
  let fixture: ComponentFixture<MyComp1787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
