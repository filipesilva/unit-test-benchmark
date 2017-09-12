import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8313Component } from './my-comp-8313.component';

describe('MyComp8313Component', () => {
  let component: MyComp8313Component;
  let fixture: ComponentFixture<MyComp8313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
