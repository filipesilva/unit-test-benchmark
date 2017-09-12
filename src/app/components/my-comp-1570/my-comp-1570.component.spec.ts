import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1570Component } from './my-comp-1570.component';

describe('MyComp1570Component', () => {
  let component: MyComp1570Component;
  let fixture: ComponentFixture<MyComp1570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
