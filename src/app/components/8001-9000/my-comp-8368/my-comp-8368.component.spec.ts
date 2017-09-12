import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8368Component } from './my-comp-8368.component';

describe('MyComp8368Component', () => {
  let component: MyComp8368Component;
  let fixture: ComponentFixture<MyComp8368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
