import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1777Component } from './my-comp-1777.component';

describe('MyComp1777Component', () => {
  let component: MyComp1777Component;
  let fixture: ComponentFixture<MyComp1777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
