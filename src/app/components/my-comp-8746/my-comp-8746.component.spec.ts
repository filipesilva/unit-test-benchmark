import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8746Component } from './my-comp-8746.component';

describe('MyComp8746Component', () => {
  let component: MyComp8746Component;
  let fixture: ComponentFixture<MyComp8746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
