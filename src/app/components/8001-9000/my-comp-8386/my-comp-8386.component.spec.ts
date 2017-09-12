import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8386Component } from './my-comp-8386.component';

describe('MyComp8386Component', () => {
  let component: MyComp8386Component;
  let fixture: ComponentFixture<MyComp8386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
