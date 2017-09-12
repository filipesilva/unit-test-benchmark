import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1891Component } from './my-comp-1891.component';

describe('MyComp1891Component', () => {
  let component: MyComp1891Component;
  let fixture: ComponentFixture<MyComp1891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
