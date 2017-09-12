import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8298Component } from './my-comp-8298.component';

describe('MyComp8298Component', () => {
  let component: MyComp8298Component;
  let fixture: ComponentFixture<MyComp8298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
