import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1124Component } from './my-comp-1124.component';

describe('MyComp1124Component', () => {
  let component: MyComp1124Component;
  let fixture: ComponentFixture<MyComp1124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
