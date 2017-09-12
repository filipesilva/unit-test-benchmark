import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8619Component } from './my-comp-8619.component';

describe('MyComp8619Component', () => {
  let component: MyComp8619Component;
  let fixture: ComponentFixture<MyComp8619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
