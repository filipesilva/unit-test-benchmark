import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1663Component } from './my-comp-1663.component';

describe('MyComp1663Component', () => {
  let component: MyComp1663Component;
  let fixture: ComponentFixture<MyComp1663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
