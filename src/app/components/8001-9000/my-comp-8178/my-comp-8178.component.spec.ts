import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8178Component } from './my-comp-8178.component';

describe('MyComp8178Component', () => {
  let component: MyComp8178Component;
  let fixture: ComponentFixture<MyComp8178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
