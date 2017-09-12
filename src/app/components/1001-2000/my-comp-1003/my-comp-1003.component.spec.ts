import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1003Component } from './my-comp-1003.component';

describe('MyComp1003Component', () => {
  let component: MyComp1003Component;
  let fixture: ComponentFixture<MyComp1003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
