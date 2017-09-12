import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1227Component } from './my-comp-1227.component';

describe('MyComp1227Component', () => {
  let component: MyComp1227Component;
  let fixture: ComponentFixture<MyComp1227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
