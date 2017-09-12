import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5545Component } from './my-comp-5545.component';

describe('MyComp5545Component', () => {
  let component: MyComp5545Component;
  let fixture: ComponentFixture<MyComp5545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
