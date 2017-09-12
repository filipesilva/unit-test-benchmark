import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9545Component } from './my-comp-9545.component';

describe('MyComp9545Component', () => {
  let component: MyComp9545Component;
  let fixture: ComponentFixture<MyComp9545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
