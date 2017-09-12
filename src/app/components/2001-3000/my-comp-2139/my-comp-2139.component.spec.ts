import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2139Component } from './my-comp-2139.component';

describe('MyComp2139Component', () => {
  let component: MyComp2139Component;
  let fixture: ComponentFixture<MyComp2139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
