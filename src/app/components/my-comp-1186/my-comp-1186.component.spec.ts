import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1186Component } from './my-comp-1186.component';

describe('MyComp1186Component', () => {
  let component: MyComp1186Component;
  let fixture: ComponentFixture<MyComp1186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
