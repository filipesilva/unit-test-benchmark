import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1352Component } from './my-comp-1352.component';

describe('MyComp1352Component', () => {
  let component: MyComp1352Component;
  let fixture: ComponentFixture<MyComp1352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
