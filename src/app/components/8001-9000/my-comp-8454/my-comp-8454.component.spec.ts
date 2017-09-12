import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8454Component } from './my-comp-8454.component';

describe('MyComp8454Component', () => {
  let component: MyComp8454Component;
  let fixture: ComponentFixture<MyComp8454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
