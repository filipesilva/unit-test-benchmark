import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1052Component } from './my-comp-1052.component';

describe('MyComp1052Component', () => {
  let component: MyComp1052Component;
  let fixture: ComponentFixture<MyComp1052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
