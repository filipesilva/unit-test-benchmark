import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1210Component } from './my-comp-1210.component';

describe('MyComp1210Component', () => {
  let component: MyComp1210Component;
  let fixture: ComponentFixture<MyComp1210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
