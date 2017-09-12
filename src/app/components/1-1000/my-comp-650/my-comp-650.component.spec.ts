import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp650Component } from './my-comp-650.component';

describe('MyComp650Component', () => {
  let component: MyComp650Component;
  let fixture: ComponentFixture<MyComp650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
