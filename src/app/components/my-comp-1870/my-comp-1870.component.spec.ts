import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1870Component } from './my-comp-1870.component';

describe('MyComp1870Component', () => {
  let component: MyComp1870Component;
  let fixture: ComponentFixture<MyComp1870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
