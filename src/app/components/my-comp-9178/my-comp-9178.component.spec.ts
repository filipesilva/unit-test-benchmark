import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9178Component } from './my-comp-9178.component';

describe('MyComp9178Component', () => {
  let component: MyComp9178Component;
  let fixture: ComponentFixture<MyComp9178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
