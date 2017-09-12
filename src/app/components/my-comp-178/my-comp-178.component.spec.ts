import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp178Component } from './my-comp-178.component';

describe('MyComp178Component', () => {
  let component: MyComp178Component;
  let fixture: ComponentFixture<MyComp178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
