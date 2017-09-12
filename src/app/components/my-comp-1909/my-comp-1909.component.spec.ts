import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1909Component } from './my-comp-1909.component';

describe('MyComp1909Component', () => {
  let component: MyComp1909Component;
  let fixture: ComponentFixture<MyComp1909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
