import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8224Component } from './my-comp-8224.component';

describe('MyComp8224Component', () => {
  let component: MyComp8224Component;
  let fixture: ComponentFixture<MyComp8224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
