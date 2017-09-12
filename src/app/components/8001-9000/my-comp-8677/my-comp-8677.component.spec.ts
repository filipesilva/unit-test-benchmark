import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8677Component } from './my-comp-8677.component';

describe('MyComp8677Component', () => {
  let component: MyComp8677Component;
  let fixture: ComponentFixture<MyComp8677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
