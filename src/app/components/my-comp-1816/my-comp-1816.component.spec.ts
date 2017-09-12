import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1816Component } from './my-comp-1816.component';

describe('MyComp1816Component', () => {
  let component: MyComp1816Component;
  let fixture: ComponentFixture<MyComp1816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
