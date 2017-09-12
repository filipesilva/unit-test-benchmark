import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1580Component } from './my-comp-1580.component';

describe('MyComp1580Component', () => {
  let component: MyComp1580Component;
  let fixture: ComponentFixture<MyComp1580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
