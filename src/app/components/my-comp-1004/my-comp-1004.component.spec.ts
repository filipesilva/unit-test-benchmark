import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1004Component } from './my-comp-1004.component';

describe('MyComp1004Component', () => {
  let component: MyComp1004Component;
  let fixture: ComponentFixture<MyComp1004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
