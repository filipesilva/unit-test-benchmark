import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8468Component } from './my-comp-8468.component';

describe('MyComp8468Component', () => {
  let component: MyComp8468Component;
  let fixture: ComponentFixture<MyComp8468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
