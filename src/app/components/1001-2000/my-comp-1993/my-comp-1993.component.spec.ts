import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1993Component } from './my-comp-1993.component';

describe('MyComp1993Component', () => {
  let component: MyComp1993Component;
  let fixture: ComponentFixture<MyComp1993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
