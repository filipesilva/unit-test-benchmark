import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1237Component } from './my-comp-1237.component';

describe('MyComp1237Component', () => {
  let component: MyComp1237Component;
  let fixture: ComponentFixture<MyComp1237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
