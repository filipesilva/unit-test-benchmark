import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8290Component } from './my-comp-8290.component';

describe('MyComp8290Component', () => {
  let component: MyComp8290Component;
  let fixture: ComponentFixture<MyComp8290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
