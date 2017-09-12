import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8861Component } from './my-comp-8861.component';

describe('MyComp8861Component', () => {
  let component: MyComp8861Component;
  let fixture: ComponentFixture<MyComp8861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
