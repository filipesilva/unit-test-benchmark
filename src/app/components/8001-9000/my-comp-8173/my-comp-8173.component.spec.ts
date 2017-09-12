import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8173Component } from './my-comp-8173.component';

describe('MyComp8173Component', () => {
  let component: MyComp8173Component;
  let fixture: ComponentFixture<MyComp8173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
