import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1120Component } from './my-comp-1120.component';

describe('MyComp1120Component', () => {
  let component: MyComp1120Component;
  let fixture: ComponentFixture<MyComp1120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
