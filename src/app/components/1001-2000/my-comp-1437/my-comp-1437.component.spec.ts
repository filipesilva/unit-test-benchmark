import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1437Component } from './my-comp-1437.component';

describe('MyComp1437Component', () => {
  let component: MyComp1437Component;
  let fixture: ComponentFixture<MyComp1437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
