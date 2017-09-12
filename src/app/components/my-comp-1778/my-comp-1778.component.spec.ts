import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1778Component } from './my-comp-1778.component';

describe('MyComp1778Component', () => {
  let component: MyComp1778Component;
  let fixture: ComponentFixture<MyComp1778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
