import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7545Component } from './my-comp-7545.component';

describe('MyComp7545Component', () => {
  let component: MyComp7545Component;
  let fixture: ComponentFixture<MyComp7545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
