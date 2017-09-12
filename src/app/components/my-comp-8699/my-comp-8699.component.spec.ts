import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8699Component } from './my-comp-8699.component';

describe('MyComp8699Component', () => {
  let component: MyComp8699Component;
  let fixture: ComponentFixture<MyComp8699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
