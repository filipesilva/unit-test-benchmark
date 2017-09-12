import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8276Component } from './my-comp-8276.component';

describe('MyComp8276Component', () => {
  let component: MyComp8276Component;
  let fixture: ComponentFixture<MyComp8276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
