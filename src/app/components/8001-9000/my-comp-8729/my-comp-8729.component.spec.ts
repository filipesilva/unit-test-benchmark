import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8729Component } from './my-comp-8729.component';

describe('MyComp8729Component', () => {
  let component: MyComp8729Component;
  let fixture: ComponentFixture<MyComp8729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
