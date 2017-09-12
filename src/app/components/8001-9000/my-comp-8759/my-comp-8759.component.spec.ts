import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8759Component } from './my-comp-8759.component';

describe('MyComp8759Component', () => {
  let component: MyComp8759Component;
  let fixture: ComponentFixture<MyComp8759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
