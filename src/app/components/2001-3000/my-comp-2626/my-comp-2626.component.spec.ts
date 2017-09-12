import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2626Component } from './my-comp-2626.component';

describe('MyComp2626Component', () => {
  let component: MyComp2626Component;
  let fixture: ComponentFixture<MyComp2626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
