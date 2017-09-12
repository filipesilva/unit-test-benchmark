import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8469Component } from './my-comp-8469.component';

describe('MyComp8469Component', () => {
  let component: MyComp8469Component;
  let fixture: ComponentFixture<MyComp8469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
