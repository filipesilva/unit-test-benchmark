import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8805Component } from './my-comp-8805.component';

describe('MyComp8805Component', () => {
  let component: MyComp8805Component;
  let fixture: ComponentFixture<MyComp8805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
