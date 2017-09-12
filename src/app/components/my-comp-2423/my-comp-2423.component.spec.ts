import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2423Component } from './my-comp-2423.component';

describe('MyComp2423Component', () => {
  let component: MyComp2423Component;
  let fixture: ComponentFixture<MyComp2423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
