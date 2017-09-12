import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9211Component } from './my-comp-9211.component';

describe('MyComp9211Component', () => {
  let component: MyComp9211Component;
  let fixture: ComponentFixture<MyComp9211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
