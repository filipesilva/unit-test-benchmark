import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1901Component } from './my-comp-1901.component';

describe('MyComp1901Component', () => {
  let component: MyComp1901Component;
  let fixture: ComponentFixture<MyComp1901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
