import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8476Component } from './my-comp-8476.component';

describe('MyComp8476Component', () => {
  let component: MyComp8476Component;
  let fixture: ComponentFixture<MyComp8476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
