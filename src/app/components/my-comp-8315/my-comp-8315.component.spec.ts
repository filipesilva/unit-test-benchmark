import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8315Component } from './my-comp-8315.component';

describe('MyComp8315Component', () => {
  let component: MyComp8315Component;
  let fixture: ComponentFixture<MyComp8315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
