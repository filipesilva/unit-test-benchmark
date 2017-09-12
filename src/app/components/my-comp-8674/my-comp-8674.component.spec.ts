import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8674Component } from './my-comp-8674.component';

describe('MyComp8674Component', () => {
  let component: MyComp8674Component;
  let fixture: ComponentFixture<MyComp8674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
