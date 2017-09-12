import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1369Component } from './my-comp-1369.component';

describe('MyComp1369Component', () => {
  let component: MyComp1369Component;
  let fixture: ComponentFixture<MyComp1369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
