import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8822Component } from './my-comp-8822.component';

describe('MyComp8822Component', () => {
  let component: MyComp8822Component;
  let fixture: ComponentFixture<MyComp8822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
