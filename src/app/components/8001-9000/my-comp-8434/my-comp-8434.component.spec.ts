import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8434Component } from './my-comp-8434.component';

describe('MyComp8434Component', () => {
  let component: MyComp8434Component;
  let fixture: ComponentFixture<MyComp8434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
