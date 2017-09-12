import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7662Component } from './my-comp-7662.component';

describe('MyComp7662Component', () => {
  let component: MyComp7662Component;
  let fixture: ComponentFixture<MyComp7662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
