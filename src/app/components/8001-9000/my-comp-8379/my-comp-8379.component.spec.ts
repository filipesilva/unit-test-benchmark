import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8379Component } from './my-comp-8379.component';

describe('MyComp8379Component', () => {
  let component: MyComp8379Component;
  let fixture: ComponentFixture<MyComp8379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
