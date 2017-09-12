import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2209Component } from './my-comp-2209.component';

describe('MyComp2209Component', () => {
  let component: MyComp2209Component;
  let fixture: ComponentFixture<MyComp2209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
