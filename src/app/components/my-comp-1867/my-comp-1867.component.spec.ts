import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1867Component } from './my-comp-1867.component';

describe('MyComp1867Component', () => {
  let component: MyComp1867Component;
  let fixture: ComponentFixture<MyComp1867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
