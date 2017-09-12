import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1545Component } from './my-comp-1545.component';

describe('MyComp1545Component', () => {
  let component: MyComp1545Component;
  let fixture: ComponentFixture<MyComp1545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
