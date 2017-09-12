import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8013Component } from './my-comp-8013.component';

describe('MyComp8013Component', () => {
  let component: MyComp8013Component;
  let fixture: ComponentFixture<MyComp8013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
