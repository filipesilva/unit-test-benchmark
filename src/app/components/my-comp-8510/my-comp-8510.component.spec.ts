import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8510Component } from './my-comp-8510.component';

describe('MyComp8510Component', () => {
  let component: MyComp8510Component;
  let fixture: ComponentFixture<MyComp8510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
