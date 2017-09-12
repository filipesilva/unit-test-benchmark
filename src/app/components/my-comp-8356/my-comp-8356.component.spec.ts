import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8356Component } from './my-comp-8356.component';

describe('MyComp8356Component', () => {
  let component: MyComp8356Component;
  let fixture: ComponentFixture<MyComp8356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
