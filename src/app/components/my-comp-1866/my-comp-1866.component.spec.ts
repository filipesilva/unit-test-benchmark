import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1866Component } from './my-comp-1866.component';

describe('MyComp1866Component', () => {
  let component: MyComp1866Component;
  let fixture: ComponentFixture<MyComp1866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
