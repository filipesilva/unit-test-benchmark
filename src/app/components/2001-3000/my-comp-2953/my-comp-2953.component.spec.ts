import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2953Component } from './my-comp-2953.component';

describe('MyComp2953Component', () => {
  let component: MyComp2953Component;
  let fixture: ComponentFixture<MyComp2953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
