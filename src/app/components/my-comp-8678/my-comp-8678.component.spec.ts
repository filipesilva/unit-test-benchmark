import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8678Component } from './my-comp-8678.component';

describe('MyComp8678Component', () => {
  let component: MyComp8678Component;
  let fixture: ComponentFixture<MyComp8678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
