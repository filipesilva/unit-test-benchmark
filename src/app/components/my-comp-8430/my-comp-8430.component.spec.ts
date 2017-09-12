import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8430Component } from './my-comp-8430.component';

describe('MyComp8430Component', () => {
  let component: MyComp8430Component;
  let fixture: ComponentFixture<MyComp8430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
