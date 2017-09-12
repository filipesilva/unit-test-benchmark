import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2832Component } from './my-comp-2832.component';

describe('MyComp2832Component', () => {
  let component: MyComp2832Component;
  let fixture: ComponentFixture<MyComp2832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
