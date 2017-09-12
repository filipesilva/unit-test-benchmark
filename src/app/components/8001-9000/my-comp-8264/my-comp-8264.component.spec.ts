import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8264Component } from './my-comp-8264.component';

describe('MyComp8264Component', () => {
  let component: MyComp8264Component;
  let fixture: ComponentFixture<MyComp8264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
