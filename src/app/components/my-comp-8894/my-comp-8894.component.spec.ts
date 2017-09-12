import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8894Component } from './my-comp-8894.component';

describe('MyComp8894Component', () => {
  let component: MyComp8894Component;
  let fixture: ComponentFixture<MyComp8894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
