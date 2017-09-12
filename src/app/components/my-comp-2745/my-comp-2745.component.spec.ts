import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2745Component } from './my-comp-2745.component';

describe('MyComp2745Component', () => {
  let component: MyComp2745Component;
  let fixture: ComponentFixture<MyComp2745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
