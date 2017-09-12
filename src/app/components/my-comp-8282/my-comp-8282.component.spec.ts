import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8282Component } from './my-comp-8282.component';

describe('MyComp8282Component', () => {
  let component: MyComp8282Component;
  let fixture: ComponentFixture<MyComp8282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
