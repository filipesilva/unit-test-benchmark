import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8924Component } from './my-comp-8924.component';

describe('MyComp8924Component', () => {
  let component: MyComp8924Component;
  let fixture: ComponentFixture<MyComp8924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
