import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1168Component } from './my-comp-1168.component';

describe('MyComp1168Component', () => {
  let component: MyComp1168Component;
  let fixture: ComponentFixture<MyComp1168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
