import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1822Component } from './my-comp-1822.component';

describe('MyComp1822Component', () => {
  let component: MyComp1822Component;
  let fixture: ComponentFixture<MyComp1822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
