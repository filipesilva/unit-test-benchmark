import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8886Component } from './my-comp-8886.component';

describe('MyComp8886Component', () => {
  let component: MyComp8886Component;
  let fixture: ComponentFixture<MyComp8886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
